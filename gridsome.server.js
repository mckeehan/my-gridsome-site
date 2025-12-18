const path = require('path');

module.exports = function (api) {
  api.onCreateNode(options => {
    if( options.internal.typeName == 'MarkdownPage' ) {
      const directory = options.fileInfo.directory.replace(/\s+/g, '-').toLowerCase();

      options.directory = `${directory}`;
      options.subFolderRegex = `^/${directory}/[^\/]+`;
    }
    return options;
  });

  api.loadSource(({ addCollection, getCollection, addSchemaResolvers }) => {
    const docs = getCollection('MarkdownPage');

    const directorySet = new Set();

    docs.data().forEach(node => {
      const parts = node.fileInfo.directory.split('/');
      for (let i = 2; i <= parts.length ; i++) {
        directorySet.add(parts.slice(0, i).join('/'));
      }
    });

    const Directories = addCollection('Directory');

    directorySet.forEach(dir => {
      console.log( 'Directory: ' + dir );
      const existingPage = docs.data().find(node => node.fileInfo.directory == dir && node.fileInfo.name == 'index');
      const dirlc = dir.replace(/\s+/g, '-').toLowerCase();
      Directories.addNode({
        id: dirlc,
        name: path.basename(dir),
        directory: dirlc,
        path: `/${dirlc}/`,
        subFolderRegex: `^/${dirlc}/[^\/]+`,
        existingPage: existingPage,
      });
    });
  });
}
