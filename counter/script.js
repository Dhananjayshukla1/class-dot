const vali= document.querySelector('#val');
// vali.innerHTML="value is:";
 function decr(){
  let value=parseInt(vali.innerHTML);
   value=value-1;

   vali.innerHTML=value;

}
function incr(){
    let value=vali.innerHTML;
    value=parseInt(value);
     value=value+1;
  
     vali.innerHTML=value;
  
  }
//   vali.innerHTML="value is:";