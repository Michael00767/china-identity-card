var identity = require("./index")

var isVaild = identity.validate("23010819520101177X")
console.log(isVaild);
identity.getInfo("23010819520101177X",function (err,identityObj) {
	if(err){
		console.log(err,"invalid identity")

	}else{
		console.log(identityObj);
	}
});
