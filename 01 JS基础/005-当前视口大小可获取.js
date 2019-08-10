// 使用前需在HTML中引入jQuery代码
  // 用于监视可视区大小变化，变化1px则会触发
  $(window).resize(function(){
    var wid = $(document).width();
    var tit = $('title');
    if (wid <= 768) {
        tit.text("极小屏幕-" + wid) ;
      } else if (wid> 768 && wid <= 992) {
        tit.text("小屏幕-" + wid) ;
      } else if (wid > 992 && wid <= 1200) {
        tit.text("普通屏幕-" + wid) ;
      } else if (wid > 1200) {
        tit.text("大屏幕-" + wid) ;
      }
  })