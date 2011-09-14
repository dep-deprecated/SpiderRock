/* Scans the DOM for links with the
 * rel="external" attribute and
 * sets a click event to open said
 * link in a new window. */
$(document).ready(function(){
  $("a[rel='external']").click(function() {
    window.open($(this).attr('href'));
    return false;
  });
  console.log("Done");
});
