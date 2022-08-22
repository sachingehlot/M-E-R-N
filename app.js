module.exports.add = function( a,b ){
    return a+b;
}
module.exports.sub = function(a,b){
    return a-b;
}
let mul= function(a,b ){
    return a*b;
}

module.exports = {...module.exports,mul};

//console.log (module.exports);