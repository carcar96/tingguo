// page01
var arr1 = ['fadeInUpBig','p-heart','p-plane','p-fan','p-music1','p-1-water',
			'p-2-wheel','p-3-cloud','p-4-cloud','p-5-cloud','p-7-ball','p-8-water',
			'p-9-jump-box','p-9-jump','fadeInOne','fadeInTwo','fadeInThree'];
//layout
var arr2 = ['rollLeft','fadeIn','fadeLeftLine','fadeLeft'];
//layout1
var arr3 = ['rollRight','fadeIn','fadeLeftLine','fadeRight'];

init();
function init(){
	for(var i=0;i<arr1.length;i++){
		$('.page01 .'+arr1[i]).hide();			
	}
	for(var i=0;i<arr2.length;i++){
		$('.layout .'+arr2[i]).hide();
	}
	for(var i=0;i<arr3.length;i++){
		$('.layout1 .'+arr3[i]).hide();
	}
}

//检测第几个页面
function checkPage(key){
	if(key==0){
		for(var i=0;i<arr1.length;i++){
			$('.page01 .'+arr1[i]).show();
		}
	}else if(key%2){
		//1、3 -->page02 page04
		for(var i=0;i<arr2.length;i++){
			$('.page0'+(key+1)+' .'+arr2[i]).show();
		}
	}else{
		//2、4 -->page03 page05
		for(var i=0;i<arr3.length;i++){
			$('.page0'+(key+1)+' .'+arr3[i]).show();
		}
	}
}

//nav li
var $nLi = $('nav ul li');
$nLi.each(function(idx,ele){
	var $oLine = $('nav .cur_line');
	var $that=$(this);
	$(ele).mouseover(function(){
		$oLine.stop().animate({
			left:$that.index()*$that.innerWidth()+22
		},500)
	})
	$('nav ul').mouseleave(function(){	
		if($that.hasClass('active')){
			var $index = idx;
			$oLine.stop().animate({
				left:$index*$that.innerWidth()+22
			},500)
		}
	})		
})