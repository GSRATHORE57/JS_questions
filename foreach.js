let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach((el) => {
//   var i = el*7;
//   if(i%14 === 0){
//     console.log("Hello")
//   }
// })
// arr.myForEach((el) => console.log(el))

// Karthik
Array.prototype.myforEach = function(callback) {
    for(let i=0 ; i < this.length ; i++){
      callback(this[i] , i , this)
      console.log(this[i])
    }
}
arr.forEach(el => {});
// arr.myforEach(el => {});
