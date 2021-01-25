'use strict';

const logger = require('./src/mii-logger.js');
console.logTime( true );
console.clear();

// console.mute();

// [ hash ]

// const sha1 = console.hash.sha1('Hello world');
// const sha256 = console.hash.sha256('Hello world');
// const sha384 = console.hash.sha384('Hello world');
// const sha512 = console.hash.sha512('Hello world');
// const md5 = console.hash.md5('Hello world');

// console.json({
//   sha1, sha256, sha384, sha512, md5
// });

// const sha1File = console.hash.sha1File('./src/mii-logger.js');
// const sha256File = console.hash.sha256File('./src/mii-logger.js');
// const sha384File = console.hash.sha384File('./src/mii-logger.js');
// const sha512File = console.hash.sha512File('./src/mii-logger.js');
// const md5File = console.hash.md5File('./src/mii-logger.js');

// console.json({
//   sha1File, sha256File, sha384File, sha512File, md5File
// });

// const testObject = {
//   name: 'Tom',
//   age: 123,
//   myArr: [0,0,0,0,0],
//   myObj: { A:{ B:{ C:{} } } },
// };

// console.json( testObject, true, 2, false ); // format, 2, not-line-by-line
// console.json( testObject, true, 4 );


// console.json( testObject, true, 2, false);

// console.json(, true, 2, false);



// [ shell ]
// console.log( console.shell.sync('ls ./*.js') );

// [ fs ]
// const absPath    = console.getAbsPath( './test.json' );
// const file       = console.readFileSync( './test.json' );
// const json_t     = console.jsonFromFile('./test.json');
// const randInt    = console.randInt( 0, 1000 );
// const randFloat  = console.randFloat( 0, 1000 );
// const hostname   = console.getHostname();
// const isFile     = console.isFile('./test.json');
// const isDir      = console.isDir('./test.json');
// const listDir    = console.listDir('./');

// console.json({
//   absPath, file:'[*file-content*]', json_t, randInt, randFloat, hostname, isFile, isDir, listDir
// }, true, 4);


// console.printObjectTree({ json_t });

// console.json({ randInt, randFloat, hostname });

// const fileInfo = console.getFileInfo( './src/mii-logger.js' );
// console.json({ fileInfo });

// const listDir = console.listDir('./');
// // console.json({ list: listDir });

// let hashAllFiles = [];

// listDir.map((file)=>{

//   const isDir = console.isDir( file );
//   const isFile = console.isFile( file );

//   let obj = {
//     file, isDir, isFile, hash: null, 
//   };

//   if( isFile ){
//     obj.hash = console.hash.sha256File( file )
//     // obj.hash = console.hash.sha1File( file )
//     // obj.hash = console.hash.sha384File( file )
//     // obj.hash = console.hash.sha512File( file )
//     // obj.hash = console.hash.md5File( file )
//   }

//   hashAllFiles.push(obj);

// });

// console.json({hashAllFiles});


// console.line();
// console.log( ' #console.log' );
// console.info( ' #console.info' );
// console.info2( ' #console.info2' );
// console.ok( ' #console.ok' );
// console.warn( ' #console.warn' );
// console.error( ' #console.error' );
// console.debug( ' #console.debug' );
// console.nocol( ' #console.nocol' );
// console.p( ' #console.p' );
// console.watch( ' #console.watch' );
// console.force( ' #console.force' );
// console.json( {key: '#console.json'} );
// return;

// const Obj = { success: true, message: 'Some message' };
// console.ok({ message: Obj.message });
// console.ok( new Error('Some Error') );


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

console.json({ isStrictMode: console.isStrictMode(), });

(async ()=>{

  // Start chronometer
  console.TS('my-custom-timer-tag');

  // Non-blocking sleep
  await console.sleep(2000);

  // End chronometer && get result
  const mSec = console.TE('my-custom-timer-tag');

  console.json({
    'execution-duration': `${mSec} mSec`
  });

})();


















