module.exports = scenario;

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  var value = 97;
  log.info({value : value}, "scenario"); //1

  function foo() {
    value *= 13;
    log.info({value : value}, "foo"); //5
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    log.info({value : value}, "racer"); //4
    setTimeout(foo, 0);
  }

  log.error('here it is')
  // value = 213;
  log.info({value : value}, "scenario"); //2

  function thing() {
    value += 131;
    log.info({value : value}, "thing"); //3
    process.nextTick(racer);
  }
}
