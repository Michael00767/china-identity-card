var identity = require("./index")
var isVaild = identity.validate("23010819520101177X")
console.log("校验身份证：","23010819520101177X",isVaild);
var isVaild = identity.validate("23010819520101177x")
console.log("校验身份证：","23010819520101177x",isVaild);
identity.getInfo("23010819520101177X",function (err,identityObj) {
	if(err){
		console.log(err,"invalid identity")

	}else{
		console.log(identityObj);
	}
});

var isVaild = identity.validate("140303020401073")
console.log("校验身份证：","140303020401073",isVaild);
identity.getInfo("140303020401073",function (err,identityObj) {
	if(err){
		console.log(err,"invalid identity")
	}else{
		console.log(identityObj);
	}
});