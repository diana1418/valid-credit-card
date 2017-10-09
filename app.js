function isValidCard(digits){
  var creditCard=parseInt(prompt('Ingrese su número de tarjeta'));
for(var i=0;i<digits;i++){
  if(creditCard.charAt(i)!==' ' && creditCard.length===16){
    var arr=creditCard.split('');
     var newArr= arr.reverse();
     for(var j=1;j<newArr.length;j+=2){
       var pair=newArr[i]*2;
       
     }

   }
  }
}
console.log(isValidCard(16));
