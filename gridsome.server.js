// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

module.exports = function (api) {
  api.loadSource(({ addCollection, getCollection }) => {
    const docs = getCollection('MarkdownPage');

    const directorySet = new Set();

    docs.data().forEach(node => {
      if( node.fileInfo.name != 'index' ) {
        const parts = node.path.split('/');
        // accumulate parent directories too
        for (let i = 1; i < parts.length - 1; i++) {
          directorySet.add(parts.slice(0, i).join('/'));
        }
      }
    });

    // Create a collection of directories
    const Directories = addCollection('Directory');

    directorySet.forEach(dir => {
      if( dir != '' && dir != '/blog' && dir != '/notes' ) {
        //console.log( 'Directory: ' + dir );
        Directories.addNode({
          id: dir || 'root',
          path: `${dir}/`,
          subFolderRegex: `^${dir}/[^\/]+`,
        });
      }
    });

    const Directory = getCollection('Directory')

    Directory.data().forEach(dir => {
      const postsInDir = docs.data().filter(node => {
         const nodeDir = path.dirname(node.path);
         return nodeDir === dir.path.replace(/\/$/, '');
      });

      // Add a reference array
      dir.children = postsInDir; //.map(p => p.id)
    })
  });
}
