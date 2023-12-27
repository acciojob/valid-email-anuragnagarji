function validEmail(str) {
	let arr=str.split(/@|.);
 if(str.includes(" ")||str.length<5||str.indexOf('@')==0||(str.indexOf('@')+1)>=str.indexOf(".")||str.indexOf(".")==(str.length-1)){
	 return false;
 }
	
		return true;
	

}


// Do not change the code below.
const str = prompt("Enter an email addpt");
alert(validEmail(str));

