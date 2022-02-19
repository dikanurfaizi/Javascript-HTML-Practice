	function onlyNum(evt) {
		let charCode = (evt.which) ? evt.which : event.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}

	function addData(){
		let input = document.getElementById('input').value;
		let output = spelledNum(input);

		if(input ==""){
			alert("Please enter number first!");
		}else{
			let html="";

			html="<tr><td>"+input+"</td><td>"+output+"</td></tr>";

			document.getElementById('result').innerHTML+=html;
			document.getElementById('input').value="";
		}
	}

	function spelledNum(input){
		let num = ['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas'];
		let unit = ['','Belas','Puluh','Ratus','Ribu','Juta','Milyar','Triliun','Kuadriliun','Seratus','Seribu'];
		let div, prefix, suffix, spelled;

		// 1 - 11
		if(input < 12){
			spelled = num[input];
		}
		// 12 - 19
		else if(input < 20){
			spelled = num[input-10]+' '+unit[1];
		}
		// 20 - 99
		else if(input < 100){
			div = input/10;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%10;
			spelled = num[prefix]+' '+unit[2]+' '+num[suffix];
		}

		// 100 - 199
		else if(input < 200){
			spelled = unit[9]+' '+ spelledNum(input - 100);
		}

		// 200 - 999
		else if(input < 1000){
			div = input/100;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%100;
			spelled = num[prefix] + ' ' + unit[3] + ' '+ spelledNum(suffix);
		}
		// 1,000 - 1,999
		else if(input < 2000){
			spelled = unit[10]+ ' ' + spelledNum(input - 1000);
		}

		// 2,000 - 9,999
		else if(input < 10000){
			div = input/1000;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%1000;
			spelled = num[prefix] + ' ' + unit[4] + ' ' + spelledNum(suffix);
		}

		// 10,000 - 99,999
		else if(input < 100000){
			div = input/100;
			prefix = parseInt(String(div).substr(0,2));
			suffix = input%1000;
			spelled = spelledNum(prefix) + ' ' + unit[4] + ' ' + spelledNum(suffix);
		}

		// 100,000 - 999,999
		else if(input < 1000000){
			div = input/1000;
			prefix = parseInt(String(div).substr(0,3));
			suffix = input%1000;
			spelled = spelledNum(prefix) + ' ' + unit[4] + ' ' + spelledNum(suffix);
		}

		// 1,000,000 - 	99,999,999
		else if(input < 100000000){
			div = input/1000000;
			prefix = parseInt(String(div).substr(0,4));
			suffix = input%1000000;
			spelled = spelledNum(prefix) + ' ' + unit[5] + ' ' + spelledNum(suffix);
		}

		else if(input < 1000000000){
			div = input/1000000;
			prefix = parseInt(String(div).substr(0,4));
			suffix = input%1000000;
			spelled = spelledNum(prefix) + ' ' + unit[5] + ' ' + spelledNum(suffix);
		}

		else if(input < 10000000000){
			div = input/1000000000;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%1000000000;
			spelled = spelledNum(prefix) + ' ' + unit[6] + ' ' + spelledNum(suffix);
		}

		else if(input < 100000000000){
			div = input/1000000000;
			prefix = parseInt(String(div).substr(0,2));
			suffix = input%1000000000;
			spelled = spelledNum(prefix) + ' ' + unit[6] + ' ' + spelledNum(suffix);
		}

		else if(input < 1000000000000){
			div = input/1000000000;
			prefix = parseInt(String(div).substr(0,3));
			suffix = input%1000000000;
			spelled = spelledNum(prefix) +' ' + unit[6] + ' ' + spelledNum(suffix);
		}

		else if(input < 10000000000000){
			div = input/10000000000;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%10000000000;
			spelled = spelledNum(prefix) +' ' + unit[7] + ' ' + spelledNum(suffix);
		}

		else if(input < 100000000000000){
			div = input/1000000000000;
			prefix = parseInt(String(div).substr(0,2));
			suffix = input%1000000000000;
			spelled = spelledNum(prefix) +' ' + unit[7] + ' ' + spelledNum(suffix);
		}

		else if(input < 1000000000000000){
			div = input/1000000000000;
			prefix = parseInt(String(div).substr(0,3));
			suffix = input%1000000000000;
			spelled = spelledNum(prefix) +' ' + unit[7] + ' ' + spelledNum(suffix);
		}

		else if(input < 10000000000000000){
			div = input/1000000000000000;
			prefix = parseInt(String(div).substr(0,1));
			suffix = input%1000000000000000;
			spelled = spelledNum(prefix) +' ' + unit[8] + ' ' + spelledNum(suffix);
		}

		let separate = spelled.split(' ');
		let full = [];
		for(let i=0;i<separate.length;i++){
			if(separate[i] != ""){full.push(separate[i]);}
		}
		return full.join(' ');
	}