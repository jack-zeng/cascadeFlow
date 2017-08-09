(function($){
 
 $.fn.cascadeFlow=function(options){
 	  $(window).scrollTop(0);//把滚动条置顶
      var defaults={speed:300},
          opt=$.extend(defaults,options),
          that=$(this);
      var _init=function(){
      	  var windowWidth=$(window).width();//获取浏览器宽度
      	  $(that).width(windowWidth);//赋值给dom宽度
      	  var cascadeFlowList=that.children("li"),//返回列表
      	      length=cascadeFlowList.length,//返回列表个数
      	      i=0,
              modelNumber=0,
              maxModel=0,
              firstWidth=cascadeFlowList.eq(0).outerWidth(true);//返回第一个列表的宽度
              if(that.width()<970){//最少要显示4条
              	    that.width(970);
              	    maxModel=Math.floor(that.width()/firstWidth);
              }else{
              	    maxModel=Math.floor(windowWidth/firstWidth);
              	    $(that).width(maxModel*firstWidth+30);//两侧间隙各30
              }
              var totalHeight0=0,
                  totalHeight1=0,
                  totalHeight2=0,
                  totalHeight3=0,
                  totalHeight4=0,
                  totalHeight5=0,
                  totalHeight6=0,
                  totalHeight7=0,//目前1920浏览器尺寸
                  totalHeight8=0,
                  totalHeight9=0,
                  totalHeight10=0;//向后兼容更大浏览器
            for(;i<length;i++){
                  modelNumber=i%maxModel;//求模定位置; 
                  switch(modelNumber){
                      case 0:
                      var currentHeight0=$(cascadeFlowList).eq(i).outerHeight();//第一排最后一个高度
                      totalHeight0+=$(cascadeFlowList).eq(i).outerHeight(true);//获取第一排总高度
                      $(that).height(totalHeight0);//设置dom高度防止溢出隐藏
                      if(i==0){
                          $(cascadeFlowList).eq(i).animate({left:0,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:0,top:(totalHeight0-15)-currentHeight0},opt.speed);//第一排高度减去最后一个列表高度
                      }
                      break;
                      case 1:
                      var currentHeight1=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight1+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==1){
                          $(cascadeFlowList).eq(i).animate({left:236,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:236,top:(totalHeight1-15)-currentHeight1},opt.speed);
                      }
                      break;
                      case 2:
                      var currentHeight2=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight2+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==2){
                          $(cascadeFlowList).eq(i).animate({left:472,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:472,top:(totalHeight2-15)-currentHeight2},opt.speed);
                      }
                      break;
                      case 3:
                      var currentHeight3=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight3+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==3){
                          $(cascadeFlowList).eq(i).animate({left:708,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:708,top:(totalHeight3-15)-currentHeight3},opt.speed);
                      }
                      break;
                      case 4:
                      var currentHeight4=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight4+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==4){
                          $(cascadeFlowList).eq(i).animate({left:944,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:944,top:(totalHeight4-15)-currentHeight4},opt.speed);
                      }
                      break;
                      case 5:
                      var currentHeight5=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight5+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==5){
                          $(cascadeFlowList).eq(i).animate({left:1180,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:1180,top:(totalHeight5-15)-currentHeight5},opt.speed);
                      }
                      break;
                      case 6:
                      var currentHeight6=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight6+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==6){
                          $(cascadeFlowList).eq(i).animate({left:1416,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:1416,top:(totalHeight6-15)-currentHeight6},opt.speed);
                      }
                      break;
                      case 7:
                      var currentHeight7=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight7+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==7){
                          $(cascadeFlowList).eq(i).animate({left:1652,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:1652,top:(totalHeight7-15)-currentHeight7},opt.speed);
                      }
                      break;
                      case 8:
                      var currentHeight8=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight8+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==8){
                          $(cascadeFlowList).eq(i).animate({left:1888,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:1888,top:(totalHeight8-15)-currentHeight8},opt.speed);
                      }
                      break;
                      case 9:
                      var currentHeight9=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight9+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==9){
                          $(cascadeFlowList).eq(i).animate({left:2124,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:2124,top:(totalHeight9-15)-currentHeight9},opt.speed);
                      }
                      break;
                      case 10:
                      var currentHeight10=$(cascadeFlowList).eq(i).outerHeight();
                      totalHeight10+=$(cascadeFlowList).eq(i).outerHeight(true);
                      if(i==10){
                          $(cascadeFlowList).eq(i).animate({left:2360,top:0},opt.speed);
                      }else{
                      	  $(cascadeFlowList).eq(i).animate({left:2360,top:(totalHeight10-15)-currentHeight10},opt.speed);
                      }
                      break;
                  } 
            }      
      } 
      /*初始化函数*/
      setTimeout(function(){
      	  _init(); 
      },300)
      /*初始化函数*/
      /*屏幕变化时*/
      $(window).resize(function(){
        setTimeout(function(){
    	    _init();
        },300)
      })
      /*屏幕变化时*/
      /*滚动条大于最高时执行函数*/
      $(window).scroll(function(){
    	    var windowTop=$(this).scrollTop();
    	    var altitude=$(document).height()-$(window).height()-1;
    	    var liHtml='';
    	   if(windowTop>altitude){//当滚动条的高度大于浏览器高度
    	   	 for(var i=0;i<10;i++){
    	   	  	  liHtml+="<li><img src='1.jpg' alt=''><p>这里是介绍</p></li>";
    	   	  }
           $('.cascadeFlowList').append(liHtml);
                setTimeout(function(){
    			    _init();
    		    },300)
    	   }
    })
      /*滚动条大于最高时执行函数*/
 }
 
}(jQuery))
$(".cascadeFlowList").cascadeFlow();