﻿    $('.bg,.windon').css("display","none");
    $('table tr td:nth-last-child(1)>a').click(function(){
 	$('.bg,.windon').css("display","block");
 	
 })
    $('.bg').click(function(){
    	$('.bg,.windon').css("display","none")
    })
// $('#esc').click(function(){
// 		
// 	
// });
 
 //五星评价
 		$('.down-win  p:nth-child(1) span img').each(function(index){
		var xing='images/comment/xing.png';	//普通灰色星星图片的存储路径
		var starRed='images/comment/xing-on.png';		//红色星星图片存储路径
//		var prompt=['很差','比较差','一般','比较好','非常好'];	//评价提示语
		this.id=index;		//遍历img元素，设置单独的id
		
		$(this).on("click",function(){	//设置鼠标滑动和点击都会触发事件
			$('.down-win p:nth-child(1) span img').attr('src',xing);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
			$(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
			$(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
//			$(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
		});
	    });
 		$('.down-win  p:nth-child(2) span img').each(function(index){
		var xing='images/comment/xing.png';	//普通灰色星星图片的存储路径
		var starRed='images/comment/xing-on.png';
		$(this).on("click",function(){	//设置鼠标滑动和点击都会触发事件
			$('.down-win p:nth-child(2) span img').attr('src',xing);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
			$(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
			$(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
//			$(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
		});
		});
	    $('.down-win  p:nth-child(3) span img').each(function(index){
		var xing='images/comment/xing.png';	//普通灰色星星图片的存储路径
		var starRed='images/comment/xing-on.png';
		$(this).on("click",function(){	//设置鼠标滑动和点击都会触发事件
			$('.down-win p:nth-child(3) span img').attr('src',xing);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
			$(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
			$(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
//			$(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
		});
	    });
  /**********判断**********/
 $('#esc').click(function(){
 	Top=$(".win-top .m-check input").is(":checked")
 	Down=$(".win-down .m-check input").is(":checked")
 	
 if((Top)&&(Down)||($('.win-top>div textarea').text()!="")) {
 	
 	$('.bg,.windon').css("display","none");
 	return true;
 }else{
 	confirm("请完善评价再离开！");
 	return false;
 }
})
 //选项卡
   $(".u-com >div:nth-child(3)").hide();
     $(".u-com >div:nth-child(4)").hide();
      $(".u-com >div:nth-child(5)").hide();
      $(".u-com >div:nth-child(6)").hide();
 $(".down-title ul li").on( "click",function(){
	 	 $(".down-title ul li").removeClass("on");
		 $(this).addClass("on");
		var ind =$(this).index();
		$(".u-com .list").hide();
	
		console.log($(".com-list"))
		$(".u-com .list").eq(ind).show();
	
})
