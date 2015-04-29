//支持第一代和第二代身份证
var regexOfIdentity = /^(\d{17}(\d|X))|(\d{15})$/,
	weights = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],
	lastCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2" ]

var validate = function (identity) {
	//验证参数类型
	if(typeof(identity) != "string") return false
	//把小写x转大写
	identity = identity.toUpperCase()
	//初步验证格式
	if(!regexOfIdentity.test(identity)) return false
	var generation = 1
	if(identity.length == 18){
		generation = 2
	}
	//第一代身份证验证方法
	if(generation == 1){
		140303020401073
		//验证出生日期
		try{
			birthday = new Date("19"+identity.substr(6,2)+"-"+identity.substr(8,2)+"-"+identity.substr(10,2))
		}catch(e){	
			return false
		}
		//出身年份小于1900的身份证判断为非法身份证
		if(birthday.getFullYear() < 1900 ) return false;
		return true
	}else{
		//第二代身份证校验方法
		//验证出生日期
		try{
			birthday = new Date(identity.substr(6,4)+"-"+identity.substr(10,2)+"-"+identity.substr(12,2))
		}catch(e){	
			return false
		}
		//出身年份小于1900的身份证判断为非法身份证
		if(birthday.getFullYear() < 1900 ) return false;
		var sum = 0 ;
		//进一步对最后一位进行校验
		for(var i = 0 ; i < 17 ; i ++){
			sum += parseInt(identity.charAt(i))*weights[i]
		}
		var indexOfLastCodes = sum%11
		if(lastCodes[indexOfLastCodes] != identity.charAt(17)) return false
		var birthday = null;
		return true
	}
	
}


module.exports = validate;