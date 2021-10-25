$(document).ready(function () {
  $('body').addClass('js');
  let $menu = $('#menu'),
    $menulink = $('.menu-link');
  $links = $('#menu').find('a')

  $menulink.click(function () {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  $links.click(function () {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
  })

  $('.rslides').responsiveSlides()
});

let mq48 = window.matchMedia('(min-width: 48em)')

function mediaQueries(mq48) {
  if (mq48.matches) {
    // mostrar iframe de video de Youtube
    document.getElementById('logos-video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXPkAFrT_c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  } else {
    // mostrar link del video de Youtube
    document.getElementById('logos-video').innerHTML = '<a href="https://www.youtube.com/watch?v=ZXPkAFrT_c4" target="_blank" >Ver Video</a>'
  }
}

mediaQueries(mq48)
mq48.addListener(mediaQueries)