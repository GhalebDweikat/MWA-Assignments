Array.prototype.even = function(){
    return setTimeout(()=>{
        console.log(this.filter(function(val, i, arr){
            return val%2 === 0;
        }))
    }, 0);
}
Array.prototype.odd = function(){
    return setTimeout(()=>{
        console.log(this.filter(function(val, i, arr){
            return val%2 !== 0;
        }))
    }, 0);
}
console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');