// TODO: Create NPM Repo => 

if( console.__MII_LOGGER__ ){
  // Already Importen
  return true;
}

console.__MII_LOGGER__ = true;

const _fs = require('fs');
const _os = require('os');
const _chi = require('child_process');
const _path = require('path');
const _crypto = require('crypto');

let allowPrint = true;
let gray = "\033[01;30m";
let red = "\033[01;31m";
let green = "\033[01;32m";
let blue = "\033[01;34m";
let yellow = "\033[01;33m";
let purple = "\033[01;35m";
let blue2 = "\033[01;36m";
let white = "\033[01;37m";
let endl = "\033[0m";

let l_gray = "\033[00;30m";
let l_red = "\033[00;31m";
let l_green = "\033[00;32m";
let l_yellow = "\033[00;33m";
let l_blue = "\033[00;34m";
let l_purple = "\033[00;35m";
let l_blue2 = "\033[00;36m";
let l_white = "\033[00;37m";
let l_endl = "\033[0m";

function R( data ){ return red +data +endl; }
function G( data ){ return green +data +endl; }
function B( data ){ return blue +data +endl; }
function Y( data ){ return yellow +data +endl; }
function P( data ){ return purple +data +endl; }
function W( data ){ return white +data +endl; }

module.exports.R = R;
module.exports.G = G;
module.exports.B = B;
module.exports.Y = Y;
module.exports.P = P;
module.exports.W = W;

console.R = R;
console.G = G;
console.B = B;
console.Y = Y;
console.P = P;
console.W = W;

// console.log( console.R('RED')+' => '+console.G('GREEN')+' => '+console.B('BLUE') );

const console_error = console.error;
const console_warn  = console.warn;
const console_info  = console.info;
const console_log   = console.log;
const console_table = console.table;

// --------------------------------------------------------------------
// Override below
let timers = {}
let console_time   = console.time;
let console_timeEnd   = console.timeEnd;
let TAB = '    ';
let NL = "\n";

function getFuncArg( args ){

  let output = '';
  let types = { 'object':1, 'function':1 };

  try{

    for (let i in args)
      output += ( types.hasOwnProperty( typeof args[i] ) ) ? JSON.stringify( args[i] )+', ' : args[i]+', ';

  }catch(e) {
    console_log( e );
    output = red+' Error while compiling logging data-string from arguments ....'+endl;
  }

  if( output.lastIndexOf(', ') != -1 )
    output = output.substr( 0, output.lastIndexOf(', ') )

  return output;

  try{

    for (let i in args) {

      if( typeof args[i] === "object" ){

        output += NL;

        for( let key in args[i] ){

          if( typeof args[i][ key ] === "object" ){
            for( let key_2 in args[i][ key ] ){
              output += TAB+key_2+' => '+args[i][ key ][ key_2 ]+', '+NL;
            }

          }else{
            output += TAB+key+' => '+args[i][ key ]+' '+NL;
          }

        }

      }else{ output += args[i]; }

    }

  }catch(e) {
    console_log( e );
    output = red+' Error while compiling logging data-string from arguments ....'+endl;
  }

  if( output.substr(0, 1) != ' ' ) output = ' '+output;
  return output;

}

function getlLogDate(){

    let D = new Date();

    let d = D.getDate();          // Get the day as a number (1-31)
    let m = D.getMonth();         // Get the month (0-11)
    let Y = D.getFullYear();      // Get the four digit year (yyyy)

    let H = D.getHours();         // Get the hour (0-23)
    let i = D.getMinutes();       // Get the minutes (0-59)
    let s = D.getSeconds();       // Get the seconds (0-59)
    // let ms = D.getTime();      // Get the time (milliseconds since January 1, 1970)

    d = d < 10 ? '0'+d : d;
    m = m < 10 ? '0'+m : m;

    H = H < 10 ? '0'+H : H;
    i = i < 10 ? '0'+i : i;
    s = s < 10 ? '0'+s : s;

    return ' ['+H+':'+i+':'+s+']';
    // return ' ['+d+'-'+m+'-'+Y+']';
    // return ' ['+d+'-'+m+'-'+Y+' '+H+':'+i+':'+s+']';

}

function processArgs( args ){

  try{

    let res = [];

    for( let i in args ){
      if( args[ i ] && typeof args[ i ] !== "undefined" && args[ i ].message && args[ i ].message !== "undefined" ){

        console_log( l_white+getlLogDate()+endl+'[*] : '+R(' #Exception: '+args[ i ].message));
        let stack = args[ i ].stack.split("\n");

        for( let si=1; si<stack.length; si++ )
          console_log( l_white+getlLogDate()+endl+'[*] : '+R('     ['+si+']: '+( stack[ si ].trim() ) ) );

      }else{
        res.push( args[ i ] );
      }

    }

    return res;
  }catch( e ){
    console_log(' logger Exception: '+e.message );
    return ['Exception:', e.message];
  }

}

const logLine = ' ----  ----  ----  ----  ----  ----  ----  ----  ---- ';
console.line = function(){
  if( !allowPrint ) return;
  console.log( l_white+logLine+endl );
}

console.log = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_log( l_white+getlLogDate()+endl+'[L] : '+white+getFuncArg( args )+endl );
}

console.info = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_info( l_white+getlLogDate()+endl+'[I] : '+blue+getFuncArg( args )+endl );
}

console.info2 = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_info( l_white+getlLogDate()+endl+'[I] : '+l_blue2+getFuncArg( args )+endl );
}

console.ok = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_log( l_white+getlLogDate()+endl+'[O] : '+green+getFuncArg( args )+endl );
}

console.warn = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_warn( l_white+getlLogDate()+endl+'[W] : '+yellow+getFuncArg( args )+endl );
}

console.error = function(){
  // if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_error( l_white+getlLogDate()+endl+'[E] : '+red+getFuncArg( args )+endl );
}

console.debug = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_info( l_white+getlLogDate()+endl+'[D] : '+purple+getFuncArg( args )+endl );
}

console.nocol = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_info( getlLogDate()+'[D] : '+getFuncArg( args ) );
}

console.p = function(){
  if( !allowPrint ) return;
  let args = processArgs( arguments );
  console_info( getlLogDate()+'[D] : '+getFuncArg( args ) );
}

console.watch = function(){
  if( !allowPrint ) return;
  console_info( purple+getlLogDate()+endl+'[H] : '+purple+getFuncArg( arguments )+endl );
}

console.force = function(){ // FORCE STDOUT
  // if( !allowPrint ) return;
  console_info( l_white+getlLogDate()+endl+'[H] : '+green+getFuncArg( arguments )+endl );
}

console.json = function( obj, format=true, indent=2, lineByLine=true ) {

  if( format ){
    let res = typeof obj === 'object' ? JSON.stringify( obj, null, indent ) : obj;
    if( lineByLine ){
      res = (''+res).split("\n");
      for( let i in res ){
        console.log( res[ i ] );
      }
    }else{
      console.log( res );
    }
  }else{
    let res = typeof obj === 'object' ? JSON.stringify( obj ) : obj;
    console.log( res );
  }

};

console.mute = function(){
  console.warn(' #logger: is disabled');
  allowPrint = false;
}

console.unMute = function(){
  allowPrint = true;
  console.ok(' #logger: is enabled');
}

// console.dir = function( mObj, padding=' ' ){
//   Object.keys(mObj).map((key)=>{
//     console.log({key, type: typeof mObj[ key ] });
//   });
// }

console.printObjectTree = function( mObj, maxDepth=7 ) {

  try{

    console.log(' #createObjectTree');
    let currDepth = -1;

    function _getType( mObj ){
      return (typeof mObj);
    }

    function _isObj( mObj ){
      return mObj !== null && mObj !== undefined &&  _getType( mObj ) === 'object';
    }

    function _print( pd, key, type ){
      console.log( pd+' ['+key+'] => ['+type+']' );
    }

    function _getObjKeys( mObj ){
      return Object.keys( mObj );
    }

    function _mkTree( pd, mObj, depth ){

      let keys = _getObjKeys( mObj );
      let allowNext = (depth) <= maxDepth;

      keys.map((key)=>{
        _print( pd, key, _getType( mObj[ key ] ) );
        if( _isObj( mObj[ key ] ) && allowNext ){
          _mkTree( pd+'  ', mObj[ key ], (depth+1) );
        }

      });

    }

    _mkTree( ' ', mObj, currDepth );
  }catch(e){
    console.error(e);
  }

};

console.randInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.randFloat = function(min, max){
  return Math.random() * (max - min + 1) + min;
}

console.getHostname = function(){
  return _os.hostname().trim();
}

console.getFileInfo = function( path ){
  try{ 
    return _fs.statSync(path); // .isDirectory(); 
  }catch( e ){
    return false;
  }
}

console.isFile = function( path ){
  const info = console.getFileInfo( path );
  return info && info.isFile();
};

console.isDir = function( path ){
  const info = console.getFileInfo( path );
  return info && info.isDirectory();
};

console.getAbsPath = function( relPath ){

  try{
    return _path.resolve( relPath );
  }catch(e){
    console.error(' console.getAbsPath: Exception: '+e.message);
    // console.error( e );
    return false;
  }
};


console.readDir = function ( path ){

  try{ 
    return _fs.readdirSync( path );
  }catch( e ){
    console.error(' console.readDir: Exception: '+e.message);
    // console.error( e );
    return [];
  }

};

console.listDir = function( path ){
  return console.readDir( path );
}

console.readFileSync = function( path, encoding='utf-8' ){

  try{ 

    while( path.replace(/\/\//gi,'/') != path )
      path = path.replace(/\/\//gi,'/');
    return _fs.readFileSync( console.getAbsPath( path ), encoding );

  }catch( e ){
    console.error(' console.readFileSync: ['+path+'] Exception: '+e.message);
    return false;
  }

};

console.jsonFromFile = function( path){

  try{ 
    return JSON.parse( console.readFileSync( path ) );
  }catch( e ){
    console.error(' console.jsonFromFile: ['+path+'] Exception: '+e.message);
    return false;
  }

};

function _hash( func='sha256', rawData, fromEncoding='utf-8', toEncoding='hex' ){
  try{
    return _crypto.createHash( func ).update(rawData, fromEncoding).digest( toEncoding );
  }catch(e){
    console.error(' Hash: ['+func+'] Exception: '+e.message);
    // console.error( e );
    return false;
  }

}

console.hash = {
  sha1: function( rawData, fromEncoding='utf-8', toEncoding='hex' ){
    return _hash( 'sha1', rawData, fromEncoding, toEncoding );
  },
  sha256: function( rawData, fromEncoding='utf-8', toEncoding='hex' ){
    return _hash( 'sha256', rawData, fromEncoding, toEncoding );
  },
  sha384: function( rawData, fromEncoding='utf-8', toEncoding='hex' ){
    return _hash( 'sha384', rawData, fromEncoding, toEncoding );
  },
  sha512: function( rawData, fromEncoding='utf-8', toEncoding='hex' ){
    return _hash( 'sha512', rawData, fromEncoding, toEncoding );
  },
  md5: function( rawData, fromEncoding='utf-8', toEncoding='hex' ){
    return _hash( 'md5', rawData, fromEncoding, toEncoding );
  },
};

console.hash.sha1File = function( fileName ){
  return console.hash.sha1( console.readFileSync( fileName ) );
}

console.hash.sha256File = function( fileName ){
  return console.hash.sha256( console.readFileSync( fileName ) );
}

console.hash.sha384File = function( fileName ){
  return console.hash.sha384( console.readFileSync( fileName ) );
}

console.hash.sha512File = function( fileName ){
  return console.hash.sha512( console.readFileSync( fileName ) );
}

console.hash.md5File = function( fileName ){
  return console.hash.md5( console.readFileSync( fileName ) );
}

console.shell = {

  sync: function( cmd, options={} ){
    try{
      const defOptions = {}; // {stdio:[0,1,2]};
      return (''+_chi.execSync( cmd, defOptions ));
    }catch(e){
      console.error(' Shell.sync Exception: '+e.message);
      return false;
    }
  },
  async: function( cmd ){
    try{
      _chi.exec( cmd, function(error, stdout, stderr){
        if( !error ){
          cb( {code: 200, msg:'OK', data: stdout, stderr: stderr } );
          return;
        }
        cb( {code: 500, msg:error, stdout:stdout, stderr: stderr } );
      });
    }catch(e){
      console.error(' Shell.async Exception: '+e.message);
        cb( {code: 500, msg:e.message, stdout:null, stderr: null } );
      return false;
    }
  },
}

// --------------------------------------------------------------------
module.exports = {
  log : console_log,
  R :R,G :G,B :B,Y :Y,P :P,W :W,
}