// npm version <update_type>

const logger = require('./src/index.js');

const package = console.jsonFromFile( './package.json' )
const new_version = package.version.split('.').map(( v, index, data )=>{
  return index == 2 ? ( (+v)+1 ) : v;
});

const old_version = package.version;
package.version = new_version.join('.');
// console.json({old_version, new_version: package.version})

console.log( ' #version: ['+old_version+'] => ['+package.version+']' );
console.jsonToFile( './package.json', package, true);

// return;
const postCmds = [
  // {name: 'version patch', cmd:'npm version patch', res: ''},
  {name: 'publish', cmd:'npm publish', res: ''},
];

postCmds.map((C, index)=>{
  postCmds[ index ].res = console.shell.sync( C.cmd );
});

// console.json(postCmds);

console.ok(' Doen ...');


