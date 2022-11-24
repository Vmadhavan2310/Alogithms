//Find

const arr=['suba',2,5,10,6,7,'vinoth']

Array.prototype.find=null

if(!Array.prototype.find){
  Array.prototype.find = function(fun) {
	var res = [ ];
	for (let val of this) {
     if(fun(val,this)){
        res.push(val)
    return res;
     }
		}
	return res;
};

}

const res=arr.find(el=> {
  return typeof el==='string'
})
console.log(res)

//map

Array.prototype.map=null

if(!Array.prototype.map){
  Array.prototype.map = function(fun) {
	var res = [ ];
	for (let val of this) {
     res.push(fun(val,this))
		}
	return res;
};

}

const res=arr.map(el=> {
  return  el*3
})
console.log(res)

//filter
Array.prototype.filter=null

if(!Array.prototype.filter){
  Array.prototype.filter = function(fun) {
	var res = [ ];
	for (let val of this) {
     if(fun(val,this)){
     res.push(val)
     }
		}
	return res;
};

}

const res=arr.filter(el=> {
  return  el>2
})
console.log(res)

