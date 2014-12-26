(function() {
  var pages = []; // スライド情報を突っ込む

  /* pagesにスライド情報をぶっこむ */
  fetchOwl = function() {
    var page = [];
    var page_body = $('.page-body').children();

    page_body.each(function() {
      var t_name   = $(this).prop("tagName");
      var contents = $(this).get(0).outerHTML;
      if(t_name == "H1") {
        if(page.length == 0) {
          page.push(contents);
        } else {
          pages.push(page);
          page = [contents];
        }
      } else {
        if(t_name == "UL") {
          $(this).children().each(function() {
            var contents = $(this).get(0).outerHTML;
            page.push(contents);
          });
        } else {
          page.push(contents);
        }
      }
    });
    pages.push(page);
  };

  /* 必要なタグをぶっこむ */
  attachOwlDown = function() {
    window.BASE_URL || (window.BASE_URL = 'http://sota1235.net/owlDown/');
    $('head').append("<link rel='stylesheet' href='" + window.BASE_URL + "owlDown.css' type='text/css'>");
    $('body').prepend('<div class="owldown"></div>');
  };
});
