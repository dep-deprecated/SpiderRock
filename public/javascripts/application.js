$(document).ready(function(){
  init_external_links();
  init_parent_links();
  init_pre_conversion();
  init_home_class();
  init_lightbox();
  $("#wrapper").css("visibility", "hidden");
});
$(window).load(function() {
  init_image_dimensions();
  init_cookie()
});

/* Scans the DOM for links with the
 * rel="external" attribute and
 * sets a click event to open said
 * link in a new window. */
function init_external_links() {
  $("a[rel='external']").click(function() {
    window.open($(this).attr('href'));
    return false;
  });
}

/* This is a Javascript-driven fix to target
 * link categories and make them "unclickable".
 * A class is also added that is targeted for CSS
 * purposes. */
function init_parent_links() {
  $(".widget_pages li").each(function() {
    if (!$(this).parent().hasClass("children")) {
      $(this).addClass("parent");
      $(this).find("a").first().addClass("parent");
    }
  });
  $(".widget_pages a.parent").click(function() {
    return false;
  });
}

/* Converting <pre> to <p> for friendlier pasting in to Wordpress */
function init_pre_conversion() {
  $(".contents pre").each(function() {
    $(this).replaceWith($('<p>' + nl2br(this.innerHTML) + '</p>'));
  });
}
function nl2br (str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

/* Adding a homepage class for css targeting */
function init_home_class() {
  if ($(".contents h2").html().match("Home")) {
    $(".contents").addClass("home");
  }
}

function init_lightbox() {
  $("a.lightbox").fancybox({
    'autoScale': false
  });
}

function init_cookie() {
  if($.cookie('spiderrock_granted') == "logged_in") {
    $("#wrapper").css("visibility", "visible");
    if(get_query_var("logged_in")) {
      $("#success_box").show();
      setTimeout('$("#success_box").fadeOut()', 1500);
    } else {
      return true;
    }
  } else {
    window.location = "/";
  }
}
function log_out() {
  $.cookie('spiderrock_granted', 'logged_out', { path: '/' });
  window.location = "/";
}

function init_image_dimensions() {
  $("img").each(function() {
    $(this).attr("width", $(this).width())
    $(this).attr("height", $(this).height());
  });
}

function get_query_var(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
}
