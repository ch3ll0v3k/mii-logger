const logger = require('./src/index.js');

// console.mute();

// [ hash ]

// ['sha1','sha256','sha384','sha512','md5'].map((func)=>{
//   console.json({ func, funcRes: console.hash[ func ]( func, 'Hello world' ) });
// });

// [ shell ]
// console.log( console.shell.sync('ls ./*.js') );

// [ fs ]
const relPath = './test.json';
const absPath = console.getAbsPath( relPath );
const file = console.readFileSync( relPath );
const json_t = console.jsonFromFile('./test.json');

// console.json({ relPath, absPath, json_t, file:'file' });

// console.printObjectTree({ json_t });

const randInt = console.randInt(0,1000);
const randFloat = console.randFloat(0,1000);
const hostname = console.getHostname();
// console.json({ randInt, randFloat, hostname });

const fileInfo = console.getFileInfo( relPath );
// console.json({ fileInfo });

const listDir = console.listDir('./');
// console.json({ list: listDir });

let hashAllFiles = [];

listDir.map((file)=>{

  const isDir = console.isDir( file );
  const isFile = console.isFile( file );

  let obj = {
    file, isDir, isFile, hash: null, 
  };

  if( isFile ){
    obj.hash = console.hash.sha256File( file )
    // obj.hash = console.hash.sha1File( file )
    // obj.hash = console.hash.sha384File( file )
    // obj.hash = console.hash.sha512File( file )
    // obj.hash = console.hash.md5File( file )
  }

  hashAllFiles.push(obj);

});

// console.json({hashAllFiles});


console.line({line: true});
console.log({log: true});
console.info({info: true});
console.info2({info2: true});
console.ok({ok: true});
console.warn({warn: true});
console.error({error: true});
console.debug({debug: true});
console.nocol({nocol: true});
console.p({p: true});
console.watch({watch: true});
console.force({force: true});
console.json({json: true});

// let red = console.R(' red ');
// let green = console.G(' green ');
// let blue = console.B(' blue ');
// let yellow = console.Y(' yellow ');
// let purple = console.P(' purple ');
// let white = console.W(' white ');

// console.log( red + green + blue + yellow + purple + white );

// console.mute();
// console.log(' this will not be printed');
// console.log(' this will not be printed');
// console.force(' Forced to print ');
// console.log(' this will not be printed');
// console.log(' this will not be printed');
// console.unMute();


// console.log( new Error('Automatic detected Errro Object with stack-trace') );

// console.log( console.R(' Каждый — красный ') );
// console.log( console.W(' Охотник — оранжевый ') );
// console.log( console.Y(' Желает — жёлтый ') );
// console.log( console.G(' Знать — зелёный ') );
// console.log( console.LB(' Где — голубой ') );
// console.log( console.B(' Сидит — синий ') );
// console.log( console.P(' Фазан — фиолетовый  ') );

// console.log( console.R(' Richard — red ') );
// console.log( console.W(' Of — orange ') );
// console.log( console.Y(' York —yellow ') );
// console.log( console.G(' Gave — green ') );
// console.log( console.LB(' Battle — blue ') );
// console.log( console.B(' In — indigo ') );
// console.log( console.P(' Vain — violet ') );
