# china-identity-card
# 中国身份证解析

## Example ##

    var identityCard = require('china-identity-card')
    var idObject = identityCard.getInfo("11022819000101271X");
    console.log(idObject):
    var validateResult = identityCard.validate("11022819000101271X");
    console.log(validateResult):
## Result ##

    { 
    	birthday: '1952-01-01',
	age: 63,
	province: '黑龙江省',
	city: '哈尔滨市',
	area: '平房区',
	gender: '男'
    }
    true

 


