$('.s-list').on('click', '.s-list-item-body', function () {
  if ($(window).width() <= 905) {
    var elements = $(this).find('*:not(h3,.s-list-item-header)');

    if ($(elements).is(":visible")) {
      $(this).removeClass("is-opened")
      $(elements).hide();
    } else {
      $(this).addClass("is-opened")
      $(elements).show();
    }
  }
});

$( document ).ready(function() {
  var contentItems = $('.client-story').find('.content > .content-item');
  var activeTabIndex = $('.client-story').find('.tabs > .active').data('content-item-to');
  $(contentItems[activeTabIndex]).fadeIn(200);
});

function tabActivate(tab) {
  var activeTab = $(tab).parent().find('.active');
  var currentTabIndex = $(tab).data('content-item-to');
  var tabsContent = $(tab).parent().parent().find('.content > .content-item');

  $(activeTab).removeClass('active');
  $(tab).addClass('active');

  $(tabsContent).fadeOut(1);
  $(tabsContent[currentTabIndex]).delay(300).fadeIn(200);
}

$('.client-story').on('click', '.tab', function () {tabActivate(this)});
$('.client-story').on('click', 'a', function () {
  var tabActive = $(this).parent().parent().parent().find('.tabs > .active');
  var tabLast = $(this).parent().parent().parent().find('.tabs > .tab').last();
  var tabNext = $(tabActive).data('content-item-to') !== $(tabLast).data('content-item-to')
    ? tabActive.next()
    : tabActive.parent().find('.tab').first();

  tabActivate(tabNext);
});

$('video').parent().click(function () {
  if($(this).children("video").get(0).paused){
    $(this).children("video").get(0).play();
    $(this).children(".play").fadeOut();
  }else{
    $(this).children("video").get(0).pause();
    $(this).children(".play").fadeIn();
  }
});
