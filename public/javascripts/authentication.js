$(document).ready(function(){
  init_cookie();
  init_login();
});

function site_unlock() {
  window.location = "/home?logged_in=1";
}

function init_cookie() {
  if($.cookie('spiderrock_granted') == "logged_in") {
    site_unlock();
  }
}
function store_cookie() {
  $.cookie('spiderrock_granted', 'logged_in', { expires: 7, path: '/' });
}
function init_login() {
  $("input[type='password']").keypress(function(e){
    if(e.which == 13){
      $("#login_button").trigger('click');
    }
  });

  $("#login_button").click(function() {
    if($("#username").val() == "spiderrock" && $("#password").val() == "algorithm") {
      store_cookie();
      site_unlock();
    } else {
      $("#error_msg").html("Username or password incorrect");
      $("input[type='password']").select();
    }
  });
}
