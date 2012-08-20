// JavaScript Document
var student={"王小臣":"0817","王军波":"1114","邵晶晶":"0113","王伟栋":"1120","张剑月":"1116","徐璐":"0721","金炉俊":"0812","蔡文剑":"1111","来丽":"0121","郑希海":"0322","叶梦梦":"1016","朱泓琴":"0719","曹飞宇":"0603","李洪":"0717","高博":"0529","余亮明":"0714","解芳":"0711","杨坤":"0826","何江":"0724","刘师洋":"0408","刘宝昌":"0816","张智斐":"0817","富玲玲":"0216","王晶":"1015","李广林":"0220","毛晓敏":"0812","王莹":"1217","李娇雅":"1207"};


function judge(value)
	{
		if(value<10)
		{value="0"+value;return value;}
		else
		{return value;}
	}
function getToday()
	{
		var day=new Date();
		var today=judge(day.getMonth()+1)+""+judge(day.getDate());
		return today;
	}
	
var today=getToday();
var str="";
$.each(student,function(name,bday){
	if(bday==today)
	{
		str=str+name+"&nbsp;";	
	}
});

if(str.length==0)
{
		$(".bdiv").html("<p>今天没有人生日，所以祝大家都快乐啊！</p>");	
}
else{
		$(".bdiv").html("<p>今天是"+ str+"同学生日，我们一起祝Ta生日快乐哦！</p>");
}
