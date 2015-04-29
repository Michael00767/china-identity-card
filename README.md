# china-identity-card
# 中国身份证解析

## Example ##

    var identity = require('china-identity-card')
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
## Result ##

    校验身份证： 23010819520101177X true
    校验身份证： 23010819520101177x true
    { birthday: '1952-01-01',
      age: 63,
      province: '黑龙江省',
      city: '哈尔滨市',
      area: '平房区',
      gender: '男',
      generation: 2 }
    校验身份证： 140303020401073 true
    { birthday: '1902-04-01',
      age: 113,
      province: '山西省',
      city: '阳泉市',
      area: '矿区',
      gender: '男',
      generation: 1 }


 


