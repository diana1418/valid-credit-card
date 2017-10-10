function isValidCard(){
  var creditCard=prompt('Introduzca su numero de tarjeta');
  var sum=0;
  for(var k=0;k<creditCard.length;k++){
  if(creditCard.charAt(k)===' ' && creditCard.length!==16){
  for(var i=0;i<creditCard.length;i++){
    sum=sum+parseInt(creditCard.substring(i,i+1));
    }
  for(var j=creditCard.length-1;j>=0;j-=2){
    var arr= new Array (0,1,2,3,4,-4,-3,-2,-1,0);
     var arrIndex=parseInt(creditCard.substring(j,j+1));
     var arrValue=arr[arrIndex];
     sum+=arrValue ;
   }
   var mod=sum%10;
   mod=10-mod;
   if(mod==10){
     mod=0;
   }
   return mod;
   }else {
     var againCreditCard=parseInt(prompt('Introduzca nuevamente su numero pero esta vez sin espacios'));
      for( var n=0;n<creditCard.length;n++){
    sum=sum+parseInt(creditCard.substring(n,n+1));
    }
  for(var m=creditCard.length-1;m>=0;m-=2){
    var ar= new Array (0,1,2,3,4,-4,-3,-2,-1,0);
     var arIndex=parseInt(creditCard.substring(m,m+1));
     var arValue=ar[arIndex];
     sum+=arValue ;
   }
   var module=sum%10;
   module=10-module;
   if(module==10){
     module=0;
   }
   return module;

   }
  }
}
 isValidCard();
