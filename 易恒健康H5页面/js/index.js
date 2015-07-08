(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/460;
ss=250*(1-s);
$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 8) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}	
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
})

$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	//if (last.row>1 && last.row<5 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}	
})

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	//if (last.row>1 && last.row<5 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}	
})

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();
$(function(){
	// page-3-1
	$(".page-3-1 .pageTopLink .img_1").bind("click",function(){ //touchstart
		$(".page-3-1").removeClass("page-current");
		$(".page-3-1 .pageTop").addClass("hide");
		$(".page-3-1 .pageUpCon").addClass("page-current").removeClass("hide");
	});
	$(".page-3-1 .pageUpCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-3-1").addClass("page-current");
			$(".page-3-1 .pageTop").removeClass("hide");
			$(".page-3-1 .pageUpCon").addClass("hide").removeClass("page-current");
		},500);
	});
	$(".page-3-1 .pagebottonLink .img_2").bind("click",function(){ //touchstart
		$(".page-3-1").removeClass("page-current");
		$(".page-3-1 .pageTop").addClass("hide");
		$(".page-3-1 .pageDownCon").addClass("page-current").removeClass("hide");
	});
	$(".page-3-1 .pageDownCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-3-1").addClass("page-current");
			$(".page-3-1 .pageTop").removeClass("hide");
			$(".page-3-1 .pageDownCon").addClass("hide").removeClass("page-current");
		},500);
	});
	// page-4-1
	$(".page-4-1 .pageTopLink img").bind("click",function(){ //touchstart
		$(".page-4-1").removeClass("page-current");
		$(".page-4-1 .pageTop").addClass("hide");
		$(".page-4-1 .pageUpCon").addClass("page-current").removeClass("hide");
	});
	$(".page-4-1 .pageUpCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-4-1").addClass("page-current");
			$(".page-4-1 .pageTop").removeClass("hide");
			$(".page-4-1 .pageUpCon").addClass("hide").removeClass("page-current");
		},500);
	});
	$(".page-4-1 .pagebottonLink img").bind("click",function(){ //touchstart
		$(".page-4-1").removeClass("page-current");
		$(".page-4-1 .pageTop").addClass("hide");
		$(".page-4-1 .pageDownCon").addClass("page-current").removeClass("hide");
	});
	$(".page-4-1 .pageDownCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-4-1").addClass("page-current");
			$(".page-4-1 .pageTop").removeClass("hide");
			$(".page-4-1 .pageDownCon").addClass("hide").removeClass("page-current");
		},500);
	});
	// page-5-1
	$(".page-5-1 .page5Top img").bind("click",function(){ //touchstart
		$(".page-5-1").removeClass("page-current");
		$(".page-5-1 .pageTop").addClass("hide");
		$(".page-5-1 .pageUpCon").addClass("page-current").removeClass("hide");
	});
	$(".page-5-1 .pageUpCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-5-1").addClass("page-current");
			$(".page-5-1 .pageTop").removeClass("hide");
			$(".page-5-1 .pageUpCon").addClass("hide").removeClass("page-current");
		},500);
	});
	$(".page-5-1 .page5Middle img").bind("click",function(){ //touchstart
		$(".page-5-1").removeClass("page-current");
		$(".page-5-1 .pageTop").addClass("hide");
		$(".page-5-1 .pageMiddleCon").addClass("page-current").removeClass("hide");
	});
	$(".page-5-1 .pageMiddleCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-5-1").addClass("page-current");
			$(".page-5-1 .pageTop").removeClass("hide");
			$(".page-5-1 .pageMiddleCon").addClass("hide").removeClass("page-current");
		},500);
	});
	$(".page-5-1 .page5Down img").bind("click",function(){ //touchstart
		$(".page-5-1").removeClass("page-current");
		$(".page-5-1 .pageTop").addClass("hide");
		$(".page-5-1 .pageDownCon").addClass("page-current").removeClass("hide");
	});
	$(".page-5-1 .pageDownCon").bind("touchend",function(){
		setTimeout(function(){
			$(".page-5-1").addClass("page-current");
			$(".page-5-1 .pageTop").removeClass("hide");
			$(".page-5-1 .pageDownCon").addClass("hide").removeClass("page-current");
		},500);
	});
});
