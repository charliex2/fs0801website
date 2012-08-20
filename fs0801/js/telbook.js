//JavaScript Document

   
 $(document).ready(function(e) {
    
	var su=["2","8","1","4","0","3","6","5","9","7"];
	//诶哟，你不要看伦家密码啦！

 	$("#okbutton").mouseenter(function(){
		$("img#okbutton").attr("src", "img/okbut1.png");
	});
	$("#okbutton").mouseleave(function(){
		$("img#okbutton").attr("src", "img/okbut2.png");
	});
	
	$("#pwd").focus(function(){
		$("#pwderr").html("");
		});

	$("#okbutton").click(function(){
		if($("#pwd").val()==(""+su[0]+su[4]+su[4]+su[1]+su[4]+su[6]+su[0]+su[7]))
		{
		$("div.tablediv").html("<table class='hovertable'><tr><th>姓&nbsp;&nbsp;&nbsp;名</th><th>手&nbsp;&nbsp;&nbsp;机</th><th>现所在地</th></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'><td>蔡文剑</td><td>15158135043</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'><td>曹飞宇</td><td>18352512151</td><td>江苏 无锡</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>富玲玲</td><td>15158135046</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>高&nbsp;&nbsp;&nbsp;博</td><td>15158135047</td><td>浙江	杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>何&nbsp;&nbsp;&nbsp;江</td><td>15158135048</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>解&nbsp;&nbsp;&nbsp;芳</td><td>暂无</td><td>贵州 黔东南</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>金炉俊</td><td>15925727707</td><td>浙江 丽水</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>来&nbsp;&nbsp;&nbsp;丽</td><td>15158135051</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>李广林</td><td>15158135052</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>李&nbsp;&nbsp;&nbsp;洪</td><td>暂无</td><td>浙江 嘉兴 </td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>李娇雅</td><td>533150</td><td>浙江 永康</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>刘宝昌</td><td>15158135055[未验证]</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>刘师洋</td><td>暂无</td><td>浙江 宁波</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>毛晓敏</td><td>15158135057</td><td>浙江 嘉兴</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>邵晶晶</td><td>15867844052</td><td>浙江 宁波</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>王&nbsp;&nbsp;&nbsp;晶</td><td>15158135059[未验证]</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>王军波</td><td>15158135060</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>王伟栋</td><td>15158135061</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>王小臣</td><td>15158135062</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>王&nbsp;&nbsp;&nbsp;莹</td><td>13567181102</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>徐&nbsp;&nbsp;&nbsp;璐</td><td>15158135064</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>杨&nbsp;&nbsp;&nbsp;坤</td><td>18685575013</td><td>贵州 黔东南</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>叶梦梦</td><td>18057637208</td><td>浙江 温岭</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>余亮明</td><td>15158135067</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>张剑月</td><td>15158135068[未验证]</td><td>浙江 杭州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>张智斐</td><td>18810797949</td><td>祖国 北京</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>郑希海</td><td>13567749930</td><td>浙江 温州</td></tr><tr onmouseover='this.style.backgroundColor='#ffff66';' onmouseout='this.style.backgroundColor='#d4e3e5';'>    <td>朱泓琴</td><td>18368876667</td><td>浙江 杭州</td></tr></table><p class='zhuming'>注：[未验证]指不知道有没有换号码。</p>");	}
else{
	$("#pwderr").html("<p>密码错误，请重新输入</p>");
	//
	$("#pwd").select($(this).val().length);
	}
});


});