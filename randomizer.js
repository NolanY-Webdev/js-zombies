var array = ['to', 'be', 'been', 'is', 'that', 'which', 'and', 'has', 'have', 'at', 'of', 'same'];
var output = '';
function randomize() {
  var count = Math.ceil(Math.random() * 10 );
  for (i = 0; i < count; i++) {
    output += array[Math.floor(Math.random() * 12 )] + '.';
  }
  output += array[Math.floor(Math.random() * 12 )];
  return output;
}

console.log(randomize());