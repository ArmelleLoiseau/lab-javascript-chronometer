class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (typeof callback === 'function') callback();
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let result = value.toString();
    if (result.length === 1) result = "0" + result;
    return result;
  }

  stop() {
    clearInterval(this.intervalId);
    // should stop a previously started chronometer 
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let timeFormatted = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return timeFormatted;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
