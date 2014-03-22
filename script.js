$(function(){  
  $window = $(window);
  $body  = $("body");              
  $bgBlur = $(".bg-blur");
                
  var bgBlurHeight = $bgBlur.height();
  var scrollFlag = false;
  var scrollThreshold  = 0.25;
  var blurWhenReach = 3;
  $window.on("scroll", function(event){
      var scrollTop = $window.scrollTop();             
      if(!scrollFlag){
          scrollFlag = true;
        $body.addClass("disable-pointer-events");
      }
      debouncePointerEvents();            
      if(scrollTop < bgBlurHeight){
        var _alpha = (scrollTop / bgBlurHeight) * blurWhenReach;
        if(_alpha > 1){ _alpha = 1 }
          TweenMax.set($bgBlur, {alpha: _alpha });
      }
   });          
  function debouncePointerEvents(){
      TweenMax.killDelayedCallsTo(addPointerEvents);
        TweenMax.delayedCall(scrollThreshold, addPointerEvents);
  }
                
  function addPointerEvents(){
      scrollFlag = false;
        $body.removeClass("disable-pointer-events");
  }
                
});