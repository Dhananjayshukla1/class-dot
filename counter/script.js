const vali= document.querySelector('#val');

 function decr(){
  let value=parseInt(vali.innerHTML);
   value=value-10;

   vali.innerHTML=value;

}
function incr(){
    let value=parseInt(vali.innerHTML);
     value=value+10;
  
     vali.innerHTML=value;
  
  }