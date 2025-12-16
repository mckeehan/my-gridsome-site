module.exports = {
  siteName: 'KI4HDU',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/authors/**/*.yaml',
        create: false
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        path: '**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          author: 'Author',
        }
      }
    },
    {
      use: '@gridsome/transformer-remark',
    },
    {
      use: 'gridsome-source-mysql',
      options: {
        connection: {
          host: 'localhost',
          socketPath: '/tmp/mysql.sock',
          port: 3307,
          user: 'digikamdb',
          password: process.env.MYSQL_PASSWORD,
          database: 'digikam4'
        },
        queries: [
          {
            sql: `SELECT image_id as id, album_id as parentAlbums_id, album_path as album_path, substring_index(album_path, '/', -1) as album_title, album_caption, collection, album_date, image_name, image_path, image_title, image_caption, creationDate, modificationDate, make, model, lens, aperture, focalLength, exposureTime, sensitivity, meteringMode, latitudeNumber, longitudeNumber, 0 as num_images, replace(replace(replace(replace(concat('https://ki4hdu.com/pics/thumbnails', image_path, '/', image_name), '.JPG', '-1024x768.JPG'), '.jpg', '-1024x768.jpg'), ' ', '%20'), '.HEIC', '-1024x768.JPG') as full_image_path FROM ImagesView`,
            name: 'Photo',
            path: 'image_name',
            refs: {
              album_id: 'parentAlbums'
            }
          },
          {
            sql: `SELECT album_id as id, parent_album_id as parentAlbums_id, album_path, substring_index(album_path, '/', -1) as album_title, album_caption, collection, album_date, image_name, image_path, image_title, image_caption, creationDate, modificationDate, make, model, lens, aperture, focalLength, exposureTime, sensitivity, meteringMode, latitudeNumber, longitudeNumber, num_images, replace(replace(replace(replace(concat('https://ki4hdu.com/pics/thumbnails', image_path, '/', image_name), '.JPG', '-1024x768.JPG'), '.jpg', '-1024x768.jpg'), ' ', '%20'), '.HEIC', '-1024x768.JPG') as album_image_path, concat(album_path, '/*') as album_path_glob FROM AlbumsView ORDER BY album_date DESC`,
            name: 'Album',
            path: 'album_title',
            refs: {
              album_id: 'parentAlbums'
            }
          },
          {
            sql: `SELECT album_id as id, album_path, substring_index(album_path, '/', -1) as album_title, album_caption, collection, album_date, image_name, image_path, image_title, image_caption, creationDate, modificationDate, make, model, lens, aperture, focalLength, exposureTime, sensitivity, meteringMode, latitudeNumber, longitudeNumber, num_images, replace(replace(replace(replace(concat('https://ki4hdu.com/pics/thumbnails', image_path, '/', image_name), '.JPG', '-1024x768.JPG'), '.jpg', '-1024x768.jpg'), ' ', '%20'), '.HEIC', '-1024x768.JPG') as album_image_path, concat(album_path, '/*') as album_path_glob FROM AlbumsView ORDER BY album_date DESC`,
            name: 'ParentAlbums',
            path: 'parent_albums_id',
          },
        ]
      }
    }  
  ],
  templates: {
    MarkdownPage: [
      {
        path: (node) => {
          const dir = node.fileInfo.directory.replace(/\s+/g, '-').toLowerCase();
          const name = node.fileInfo.name.replace(/\s+/g, '-').toLowerCase();
          
          if (dir) {
            return `/${dir}/${name}`;
          }
          return `/${name}`;
        }
      }
    ],
    Tag: [
      {
        path: (node) => {
          // Replace spaces with hyphens for URL-safe tag paths
          return `/tags/${node.id.replace(/\s+/g, '-')}`;
        }
      }
    ],
    ParentAlbums: [
      {
        path: (node) => {
          const name = node.album_path.replaceAll(/'/g,"-").replace(/[|&;$%@"<>()+,]/g, "").replaceAll(/ /g, '-').toLowerCase()
          
          return `/photos${name}`;
        }
      }
    ],
    Photo: [
      {
        path: (node) => {
          const name = node.album_path.replaceAll(/'/g,"-").replace(/[|&;$%@"<>()+,]/g, "").replaceAll(/ /g, '-').toLowerCase()
          const imageName = node.image_name.replaceAll(/'/g,"-").replace(/[|&;$%@"<>()+,]/g, "").replaceAll(/ /g, '-').toLowerCase()
          return `/photos${name}/${imageName}`;
        }
      }
    ],
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  }
}
