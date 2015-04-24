//从国家统计局抓取数据。//从国家统计局抓取数据:http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201401/t20140116_501070.html
var areaDate = []
var lastP=null,lastC=null,lastA=null;
$(".TRS_Editor p.MsoNormal").each(function(i){
	var rowHtml = this.innerHTML.replace(" ","")
	//console.log(rowHtml);
	switch(rowHtml.lastIndexOf("&nbsp;")){
		case 18: 
			if(lastP){
				if(lastC){
					lastP.cities.push(lastC)
					lastC = null;
				}
				//如果底下没有城市，增加一个和省级别名称的城市
				if(lastP.cities.length == 0){
					lastP.cities.push({
						code:"00",
						name:lastP.name,
						areas:[{
							code:"00",
							name:lastP.name,
						}]
					});
				}
				areaDate.push(lastP);
			}
			var tmpPData = rowHtml.split("&nbsp;&nbsp;&nbsp;")
			lastP=
				{
					code:tmpPData[0].substr(0,2),
					name:tmpPData[1],
					cities:[]
				};
			break;
		case 30: 
			if(lastC){
				//如果底下没有地区，增加一个和城市名称相同的地区
				if(lastC.areas.length == 0){
					lastC.areas.push({
						code:"00",
						name:lastC.name
					});
				}
				lastP.cities.push(lastC);
				lastC = null
			} 
			var tmpCData = rowHtml.split("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
			lastC = 
				{
					code:tmpCData[0].substr(2,2),
					name:tmpCData[1],
					areas:[]
				};
			break;
		case 42: 
			var tmpAData = rowHtml.split("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
			lastA = 
				{
					code:tmpAData[0].substr(4,2),
					name:tmpAData[1]
				};
			//console.log(lastP,lastC,lastA,i)
			lastC.areas.push(lastA);
			lastA = null;
	}

})
//如果底下没有城市，增加一个和省级别名称的城市
				if(lastP.cities.length == 0){
					lastP.cities.push({
						code:"00",
						name:lastP.name,
						areas:[{
							code:"00",
							name:lastP.name,
						}]
					});
				}
areaDate.push(lastP);

//把结果输出，校验结果
areaDate.forEach(function(p){
	p.cities.forEach(function(c){
		c.areas.forEach(function(a){
			console.log(p.code+c.code+a.code+"-"+p.name+"-"+c.name+"-"+a.name);
		})
	})
})