/* Scans the DOM for links with the
 * rel="external" attribute and
 * sets a click event to open said
 * link in a new window. */
$(document).ready(function(){
  $("a[rel='external']").click(function() {
    window.open($(this).attr('href'));
    return false;
  });
});

/* This is a Javascript-driven fix to target
 * link categories and make them "unclickable".
 * A class is also added that is targeted for CSS
 * purposes. */
$(document).ready(function() {
  $(".widget_pages li, #footer li").each(function() {
    if (!$(this).parent().hasClass("children")) {
      $(this).addClass("parent");
      $(this).find("a").first().addClass("parent");
    }
  });
  $(".widget_pages .parent a").first().click(function() {
    return false;
  });
  $("#footer a.parent").click(function() {
    return false;
  });
});
