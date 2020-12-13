function ClearScreenReporter() {
  this.onRunStart = function() {
    console.log("\x1bc");
  };
}

module.exports = {
  'reporter:clear-screen': ['type', ClearScreenReporter]
};
