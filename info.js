var validate = require('./validate'),
	areaData = require('./chinaAreaDate')
	
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


var getInfo = function (identity,cb) {
	var identityObj = {
		birthday 	: "",
		age			: 0 ,
		province	: null,
		city		: null,
		area		: null,
		gender		: null,
		generation	: 2
	}

	if(!validate(identity))
		return cb(new Error("Invalid Identity"))
	var generation = 2;
	if(identity.length == 15){
		generation = 1
	}
	if(generation == 1){
		identityObj.birthday = "19"+identity.substr(6,2)+"-"+identity.substr(8,2)+"-"+identity.substr(10,2)
		if(identity.charAt(14)%2 == 1){
			identityObj.gender = "男"
		}else{
			identityObj.gender = "女"
		}
		identityObj.generation = 1
	}else{
		identityObj.birthday = identity.substr(6,4)+"-"+identity.substr(10,2)+"-"+identity.substr(12,2)
		if(identity.charAt(16)%2 == 1){
			identityObj.gender = "男"
		}else{
			identityObj.gender = "女"
		}
		identityObj.generation = 2
	}
	identityObj.age 	 = getAge(identityObj.birthday)
	var provinceCode 	 = identity.substr(0,2)
	var cityCode 	 	 = identity.substr(2,2)
	var areaCode 	 	 = identity.substr(4,2)
	areaData.forEach(function(p){
		if(p.code == provinceCode){
			identityObj.province = p.name;
			p.cities.forEach(function(c){
				if(c.code == cityCode){
					identityObj.city = c.name;
					c.areas.forEach(function(a){
						if(a.code == areaCode){
							identityObj.area = a.name;
							return true;
						}
					})
					return true;
				}
			})
			return true;
		}
	})
	return cb(null,identityObj);
}

module.exports = getInfo;