// npm version <update_type>

const logger = require('./src/mii-logger.js');

const json_package = console.jsonFromFile( './package.json' )
const new_version = json_package.version.split('.').map(( v, index, data )=>{
  return index == 2 ? ( (+v)+1 ) : v;
});

const old_version = json_package.version;
json_package.version = new_version.join('.');
// console.json({old_version, new_version: json_package.version})

console.log( ' #version: ['+old_version+'] => ['+json_package.version+']' );
console.jsonToFile( './package.json', json_package, true);

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


