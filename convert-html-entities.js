/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */


var map = {
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  '"':'&quot;',
  "'":'&apos;'
}
function convertHTML(str) {
  let letter = str.split('');
  letter.forEach((e,i) => {
    if(map[e]){
      letter[i] = map[e];
    }
  })
  console.log(letter.join(''))
  return letter.join('');
}

//convertHTML("Dolce & Gabbana");
convertHTML("Schindler's List");