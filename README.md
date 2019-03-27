### mii-logger.js is NodeJs Simple logger 

[![npm version](https://badge.fury.io/js/mii-logger.js.svg)](https://badge.fury.io/js/mii-logger.js)

##### Install:

```bash
npm i mii-logger.js --save
```

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

