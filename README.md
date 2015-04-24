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
	    birthday:"1900-01-01",
	    age:115,
	    province:
	    area:
	    city:
	    sex:"男"
    }
    true

 


