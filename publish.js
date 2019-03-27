// npm version <update_type>
const fs = require('fs');
const chi = require('child_process');


const package = JSON.parse( fs.readFileSync('./package.json','utf-8') );
const new_version = package.version.split('.').map(( v, index, data )=>{
  return index == 2 ? ( (+v)+1 ) : v;
});

const old_version = package.version;
package.version = new_version.join('.');

console.log( ' #version: ['+old_version+'] => ['+package.version+']' );
fs.writeFileSync('./package.json', JSON.stringify( package, null, 4 ) ); 

const postCmds = [
  {name: 'version patch', cmd:'npm version patch', res: ''},
  {name: 'publish', cmd:'npm publish', res: ''},
];

postCmds.map((C, index)=>{
  postCmds[ index ].res = (chi.execSync( C.cmd )).toString()
});

console.json(postCmds);



