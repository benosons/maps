"use strict"
$(document).ready(function(){
  var win = navigator.platform.indexOf('Win') > -1;
  if (win && document.querySelector('#sidenav-scrollbar')) {
    var options = {
    damping: '0.5'
    }
    Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
  }

  $('.nav-item').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    checkarrow(this);
  })
});

function checkarrow(ini){
  if($(ini).hasClass('active')){
      $(ini).children().children().find('.icon-nya').text('expand_more');
      $(ini).find('.submenu').css('display', 'block');
      $(ini).find('.active-bang').addClass('bg-gradient-primary');
    }else{
      $(ini).children().children().find('.icon-nya').text('expand_less');
      $(ini).find('.submenu').css('display', 'none');
      $(ini).find('.active-bang').removeClass('bg-gradient-primary');
    }
}
