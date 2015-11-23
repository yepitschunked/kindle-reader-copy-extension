window.KindleReaderContextMenu.show = (function(old) {
  return function(a, b, c, f, h) {
    window.KindleReaderClippingManager.getSelectedText().then(function(result) { sandbox.value = result.text; });
    old.apply(window.KindleReaderContextMenu, arguments);
  }
}(window.KindleReaderContextMenu.show));

function copy() {
  sandbox.focus();
  sandbox.select();
  document.execCommand('copy');
}

var sandbox = document.createElement('textarea');
document.body.appendChild(sandbox);

document.addEventListener('copy', function(e) {
    sandbox.focus();
    sandbox.select();
    document.execCommand('copy');
});
