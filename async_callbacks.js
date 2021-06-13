// .load async_callbacks.js

/**
 * write a function where a callback can be passed in as an argument
 * The outer function invokes the callback
 */

function doWork(type, cb) {
  console.log('starting my work', type);
  cb();
}

const cb = () => console.log('finished')
doWork('cooking', cb);


