function convertToBinary(){	
	var decimal = document.getElementById('decimal').value;
	var output = [];	
	var sNumber = decimal.toString();		
		for(var i = 0, len = sNumber.length; i < len; i++){
		  output.push(+sNumber.charAt(i));
		}		
		var binary = [];				
	do{		
		var remainder = decimal%2;
		binary.push(remainder);	
		decimal = (parseInt(decimal) - remainder)/2;		
	}while(parseInt(decimal) / 2 != 0);
		
	binary.reverse();
	document.getElementById('result').value = binary.join("");		
	}
		
