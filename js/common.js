// 显示源代码
$('#code').append($('#chartCode').html())
// console.log($('#chartCode').html())
hljs.initHighlightingOnLoad();

// 复制按钮
var clipboard = new ClipboardJS('.btn-copy', {
  target: function() {
    return document.querySelector('#code');
  }
});


// 拖拽改变左侧宽度
$(".code-gutter").on('mousedown',function(){
  dragging = true;
  $(document).on('mousemove',function(e){
    if(dragging){
      clickX = e.pageX;
      $(".code-side").width(clickX);
      $(".code-gutter").css('left',clickX);
      $(".code-main").css('left',clickX);
      myChart.resize();
    }
  })
  $(document).on('mouseup',function(e){
    $(this).unbind('mousemove');
    dragging = false;
    e.cancelBubble = true; //禁止事件冒泡
  })
})

// 返回首页
$('.code-top').append('<a href="../index.html" class="btn-return">返回首页</a>')



