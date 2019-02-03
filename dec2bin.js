function convertToBinary() {

  var decimal = document.getElementById('decimal').value;
  var output = [];
  var sNumber = decimal.toString();
  if (sNumber.charAt(0) == "-") {
    decimal = decimal * -1;
    for (var i = 1, len = sNumber.length; i < len; i++) {
      output.push(+sNumber.charAt(i));
    }
    var binary = [];
    do {
      var remainder = decimal % 2;
      binary.push(remainder);
      decimal = (parseInt(decimal) - remainder) / 2;
    } while (parseInt(decimal) / 2 != 0);

    binary.reverse();
    for (var i = 0; i < binary.length; i++) {

      if (binary[i] == 1) {

        binary[i] = 0;
      } else {
        binary[i] = 1;
      }
    }

    document.getElementById('result').value = binary.join("");

  } else {
    for (var i = 0, len = sNumber.length; i < len; i++) {
      output.push(+sNumber.charAt(i));
    }
    var binary = [];
    do {
      var remainder = decimal % 2;
      binary.push(remainder);
      decimal = (parseInt(decimal) - remainder) / 2;
    } while (parseInt(decimal) / 2 != 0);

    binary.reverse();
    document.getElementById('result').value = binary.join("");

    //document.getElementById('result').value = ((document.getElementById('decimal').value >>> 0).toString(2));	
  }

}
