//object cloning by using iteration concept
//......................................//

let rectangle={
    lenght:2,
    breadth:20,
}
// let a={};
// for(let key in rectangle){
//     console.log(rectangle[key])
// }
// for(let key in rectangle){
//     a[key]=rectangle[key];
// }
// for(let key in a){
//     console.log(key,a[key])
// }


//object cloning by using assignment concept
//......................................//


// let b=Object.assign({},rectangle)
// for(let key in b){
//     console.log(key,key,b[key])

// }


//object cloning by using spread concept
//......................................//


// let c={...rectangle
// }
// for(let key in c){
//     console.log(c[key],key,key,c[key])

// }