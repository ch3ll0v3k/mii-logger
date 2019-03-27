### mii-logger.js is NodeJs Simple logger 

[![npm version](https://badge.fury.io/js/mii-logger.js.svg)](https://badge.fury.io/js/mii-logger.js)

##### Install:

```bash
npm i mii-logger.js --save
```

##### mute and unmute all console output:

```javascript
// Just require it
const mLogger = require('mii-logger.js');

```

-----------------------------------------------------------------------

##### Main console print functions:
```javascript

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

```

[![print-all](https://raw.githubusercontent.com/ch3ll0v3k/mii-logger/master/git-imgs/print-all.png)]

-----------------------------------------------------------------------

##### mute and unmute all console output:

```javascript
console.mute();

console.log(' this will not be printed');
console.log(' this will not be printed');

console.force(' Forced to print ');

console.log(' this will not be printed');
console.log(' this will not be printed');

console.unMute();
```

[![mute-unmute](https://raw.githubusercontent.com/ch3ll0v3k/mii-logger/master/git-imgs/mute-unmute.png)]

-----------------------------------------------------------------------

```javascript

console.log( new Error('Automatic detected Error Object with stack-trace') );

// [12:04:04][*] :  #Exception: Automatic detected Errro Object with stack-trace
// [12:04:04][*] :      [1]: at Object.<anonymous> (/m-sys/prog/nodejs/mii-logger/dev.main.js:93:14)
// [12:04:04][*] :      [2]: at Module._compile (internal/modules/cjs/loader.js:721:30)
// [12:04:04][*] :      [3]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
// [12:04:04][*] :      [4]: at Module.load (internal/modules/cjs/loader.js:620:32)
// [12:04:04][*] :      [5]: at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
// [12:04:04][*] :      [6]: at Function.Module._load (internal/modules/cjs/loader.js:552:3)
// [12:04:04][*] :      [7]: at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
// [12:04:04][*] :      [8]: at executeUserCode (internal/bootstrap/node.js:342:17)
// [12:04:04][*] :      [9]: at startExecution (internal/bootstrap/node.js:276:5)
// [12:04:04][*] :      [10]: at startup (internal/bootstrap/node.js:227:5)
// [12:04:04][L] :

```

[![detected-errro](https://raw.githubusercontent.com/ch3ll0v3k/mii-logger/master/git-imgs/detected-errro.png)]

-----------------------------------------------------------------------

```javascript
console.log( console.R(' Каждый — красный ') );
console.log( console.W(' Охотник — оранжевый ') );
console.log( console.Y(' Желает — жёлтый ') );
console.log( console.G(' Знать — зелёный ') );
console.log( console.LB(' Где — голубой ') );
console.log( console.B(' Сидит — синий ') );
console.log( console.P(' Фазан — фиолетовый  ') );

console.log( console.R(' Richard — red ') );
console.log( console.W(' Of — orange ') );
console.log( console.Y(' York —yellow ') );
console.log( console.G(' Gave — green ') );
console.log( console.LB(' Battle — blue ') );
console.log( console.B(' In — indigo ') );
console.log( console.P(' Vain — violet ') );

```

[![detected-errro](https://raw.githubusercontent.com/ch3ll0v3k/mii-logger/master/git-imgs/rainbow.png)]

-----------------------------------------------------------------------
### Build-In Tools:

##### printing JSON;

```javascript
const testObject = {
  name: 'Tom',
  age: 123,
  myArr: [0,0,0,0,0],
  myObj: { A:{ B:{ C:{} } } },
};


// prints as formated json, line-by-line: (defaullt: true);
// console.json( myObject, format=true, spaces=2, lineByLine=true );

console.json( testObject ); // prints as formated json, line-by-line: (defaullt: true);

// [12:31:42][L] : {
// [12:31:42][L] :   "name": "Tom",
// [12:31:42][L] :   "age": 123,
// [12:31:42][L] :   "myArr": [
// [12:31:42][L] :     0,
// [12:31:42][L] :     0,
// [12:31:42][L] :     0,
// [12:31:42][L] :     0,
// [12:31:42][L] :     0
// [12:31:42][L] :   ],
// [12:31:42][L] :   "myObj": {
// [12:31:42][L] :     "A": {
// [12:31:42][L] :       "B": {
// [12:31:42][L] :         "C": {}
// [12:31:42][L] :       }
// [12:31:42][L] :     }
// [12:31:42][L] :   }
// [12:31:42][L] : }

console.json( testObject, false ); // no-format

// [12:34:02][L] : {"name":"Tom","age":123,"myArr":[0,0,0,0,0],"myObj":{"A":{"B":{"C":{}}}}}

console.json( testObject, true, 2, false ); // format, 2, not-line-by-line

//  [12:34:40][L] : {
//   "name": "Tom",
//   "age": 123,
//   "myArr": [
//     0,
//     0,
//     0,
//     0,
//     0
//   ],
//   "myObj": {
//     "A": {
//       "B": {
//         "C": {}
//       }
//     }
//   }
// }

```
-----------------------------------------------------------------------

##### Hash text && files

```javascript

// HASH FILE:

const sha1 = console.hash.sha1('Hello world');
const sha256 = console.hash.sha256('Hello world');
const sha384 = console.hash.sha384('Hello world');
const sha512 = console.hash.sha512('Hello world');
const md5 = console.hash.md5('Hello world');

console.json({
  sha1, sha256, sha384, sha512, md5
});

// [12:37:26][L] : {
// [12:37:26][L] :   "sha1": "7b502c3a1f48c8609ae212cdfb639dee39673f5e",
// [12:37:26][L] :   "sha256": "64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c",
// [12:37:26][L] :   "sha384": "9203b0c4439fd1e6ae5878866337b7c532acd6d9260150c80318e8ab8c27ce330189f8df94fb890df1d298ff360627e1",
// [12:37:26][L] :   "sha512": "b7f783baed8297f0db917462184ff4f08e69c2d5e5f79a942600f9725f58ce1f29c18139bf80b06c0fff2bdd34738452ecf40c488c22a7e3d80cdf6f9c1c0d47",
// [12:37:26][L] :   "md5": "3e25960a79dbc69b674cd4ec67a72c62"
// [12:37:26][L] : }

```

```javascript

// HASH FILE:

const sha1File = console.hash.sha1File('./src/index.js');
const sha256File = console.hash.sha256File('./src/index.js');
const sha384File = console.hash.sha384File('./src/index.js');
const sha512File = console.hash.sha512File('./src/index.js');
const md5File = console.hash.md5File('./src/index.js');

console.json({
  sha1File, sha256File, sha384File, sha512File, md5File
});

// [12:41:06][L] : {
// [12:41:06][L] :   "sha1File": "64c68f13518ae7a9d7cd0527efb0bd4f05971bd1",
// [12:41:06][L] :   "sha256File": "f713de98a0e30a8a6be1ca75dde114348cef739e98c96f1474e918312f18e737",
// [12:41:06][L] :   "sha384File": "dd9a60907ce6caa615f0ac5bf38e35c0445f1baf84feb3ce380640d3e7e48e039739a114b9a1c65987f3599f39ebbc6e",
// [12:41:06][L] :   "sha512File": "b290b58dff4aac29be4884745712b09f20e9397ca8d5367e7e2d27d1145957f7ded16b1823280571960ed2422919d8cce7e342d51bb41123b37d18b3c585c372",
// [12:41:06][L] :   "md5File": "5ce1be8a91e7cdab8f21a09e272d32e9"
// [12:41:06][L] : }
```

-----------------------------------------------------------------------

#### Other

```javascript
const absPath    = console.getAbsPath( './test.json' );
const file       = console.readFileSync( './test.json' );
const json_t     = console.jsonFromFile('./test.json');
const randInt    = console.randInt( 0, 1000 );
const randFloat  = console.randFloat( 0, 1000 );
const hostname   = console.getHostname();
const isFile     = console.isFile('./test.json');
const isDir      = console.isDir('./test.json');
const listDir    = console.listDir('./');

console.json({
  absPath, file:'[*file-content*]', json_t, randInt, randFloat, hostname, isFile, isDir, listDir
}, true, 4);

// [12:45:02][L] : {
// [12:45:02][L] :     "absPath": "/m-sys/prog/nodejs/mii-logger/test.json",
// [12:45:02][L] :     "file": "[*file-content*]",
// [12:45:02][L] :     "json_t": {
// [12:45:02][L] :         "name": "Tom",
// [12:45:02][L] :         "age": 123,
// [12:45:02][L] :         "PI": 3.1415,
// [12:45:02][L] :         "obj": {
// [12:45:03][L] :             "A": {
// [12:45:03][L] :                 "B": {
// [12:45:03][L] :                     "C": {
// [12:45:03][L] :                         "D": {
// [12:45:03][L] :                             "END": 777
// [12:45:03][L] :                         }
// [12:45:03][L] :                     }
// [12:45:03][L] :                 }
// [12:45:03][L] :             }
// [12:45:03][L] :         }
// [12:45:03][L] :     },
// [12:45:03][L] :     "randInt": 302,
// [12:45:03][L] :     "randFloat": 247.4021970490431,
// [12:45:03][L] :     "hostname": "abi",
// [12:45:03][L] :     "isFile": true,
// [12:45:03][L] :     "isDir": false,
// [12:45:03][L] :     "listDir": [
// [12:45:03][L] :         ".git",
// [12:45:03][L] :         ".gitignore",
// [12:45:03][L] :         "README.md",
// [12:45:03][L] :         "deploy.js",
// [12:45:03][L] :         "dev",
// [12:45:03][L] :         "dev.main.js",
// [12:45:03][L] :         "git-imgs",
// [12:45:03][L] :         "mii-dev",
// [12:45:03][L] :         "node_modules",
// [12:45:03][L] :         "package-lock.json",
// [12:45:03][L] :         "package.json",
// [12:45:03][L] :         "src",
// [12:45:03][L] :         "test.file",
// [12:45:03][L] :         "test.json"
// [12:45:03][L] :     ]
// [12:45:03][L] : }

```

-----------------------------------------------------------------------

#### Get File-System [file/dir] info object 

```javascript

const fileInfo = console.getFileInfo( './src/index.js' );
console.json({ fileInfo });

// [12:46:12][L] : {
// [12:46:12][L] :   "fileInfo": {
// [12:46:12][L] :     "dev": 2052,
// [12:46:12][L] :     "mode": 33188,
// [12:46:12][L] :     "nlink": 1,
// [12:46:12][L] :     "uid": 1000,
// [12:46:12][L] :     "gid": 1000,
// [12:46:12][L] :     "rdev": 0,
// [12:46:12][L] :     "blksize": 4096,
// [12:46:12][L] :     "ino": 7574841,
// [12:46:12][L] :     "size": 14233,
// [12:46:12][L] :     "blocks": 32,
// [12:46:12][L] :     "atimeMs": 1553686826588.2861,
// [12:46:12][L] :     "mtimeMs": 1553686821032.3079,
// [12:46:12][L] :     "ctimeMs": 1553686821032.3079,
// [12:46:12][L] :     "birthtimeMs": 1553686821032.3079,
// [12:46:12][L] :     "atime": "2019-03-27T11:40:26.588Z",
// [12:46:12][L] :     "mtime": "2019-03-27T11:40:21.032Z",
// [12:46:12][L] :     "ctime": "2019-03-27T11:40:21.032Z",
// [12:46:12][L] :     "birthtime": "2019-03-27T11:40:21.032Z"
// [12:46:12][L] :   }
// [12:46:12][L] : }

```

[![fileInfo](https://raw.githubusercontent.com/ch3ll0v3k/mii-logger/master/git-imgs/fileInfo.png)]

