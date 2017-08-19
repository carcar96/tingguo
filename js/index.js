var aPage = document.getElementsByClassName('page');
var oTab = document.getElementsByClassName('tab')[0];
var aLi = oTab.getElementsByTagName('li');
var H = window.innerHeight || document.documentElement.clientHeight;

var key;
var flag=false;
var timer=null;
var timer1=null;
init();

//刷新
window.onload=function(){
	var current = document.body.scrollTop||document.documentElement.scrollTop;
	key=current/H;
	changeStyle();
	checkPage(key);
}

function init(){
	//page高度
	for(var i=0;i<aPage.length;i++){
		aPage[i].style.height = H + 'px';
	}
	//tab切换
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){			
			key=this.index;
			changeStyle();
			toPage();
		}
	}
}

//选中li
function changeStyle(){
	for(var i=0;i<aLi.length;i++){
		aLi[i].className = '';
	}
	aLi[key].className = 'active';
}

//跳转到page
function toPage(){
	buffer(key*H);
}

//缓冲运动
function buffer(iTarget){
	clearInterval(timer);
	timer=setInterval(function(){
		flag = true;
		var current = document.body.scrollTop||document.documentElement.scrollTop;
		var speed = (iTarget-current)/10;
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		window.scrollTo(0,speed+current);
		if(!speed){
			clearInterval(timer);
			flag=false;
			checkPage(key);
		}
	},30)
}

//鼠标滚动
window.onmousewheel = function(ev){
	var oEv = ev || event;
	if(flag) return false;
	clearTimeout(timer1);
	timer1 = setTimeout(function(){
		if(oEv.wheelDelta<0){
			//往下
			key++;
			if(key>=4){key=4};
			buffer(key*H);
		}else{
			//往上
			key--;
			if(key<=0){key=0};
			buffer(key*H);
		}
		changeStyle();
	},100)	
}

//keydown
window.onkeydown = function(ev){
	var oEv = ev || event;

	if(oEv.keyCode == 38){
		//上
		key--;
		if(key<=0){key=0};
		buffer(key*H);
	}else if(oEv.keyCode == 40){
		//下
		key++;
		if(key>=4){key=4};
		buffer(key*H);
	}
	changeStyle();
}