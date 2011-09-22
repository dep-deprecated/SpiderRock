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


/* Converting <pre> to <p> for friendlier pasting in to Wordpress */
$(document).ready(function() {
  $(".contents pre").each(function() {
    $(this).replaceWith($('<p>' + nl2br(this.innerHTML) + '</p>'));
  });
})
function nl2br (str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

$(document).ready(function() {
  if ($(".contents h2").html().match("Home")) {
    $(".contents").addClass("home");
  }
})
