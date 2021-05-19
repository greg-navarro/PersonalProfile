// Responsize Layout
function sizeElements() {
  // find the header
  let header = document.getElementById('banner');
  // use jquery to get height
  let headerHeight = $(header).height();
  // get window height
  let windowHeight = $(window).height();
  // set column heights to be the full pink flamingo dingo
  let rowLeft = document.getElementById('left');
  let rowRight = document.getElementById('right');
  let rowHeight = windowHeight - headerHeight;
  $(rowLeft).height(rowHeight);
  // set topleft
  let leftHeight = Math.ceil(rowHeight*0.4);
  console.log(rowHeight);
  console.log(leftHeight);
  $(document.getElementById('topleft')).height(leftHeight);
  // TODO set width
  return 0;
}

sizeElements();

$(document).ready(function () {
  $(window).resize(function() {
    sizeElements();
  });
});

