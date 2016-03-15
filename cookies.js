$(document).ready(function(){
  var sugar_cookie = 1
  var lemon_cookie = 1
  var choc_cookie = 1


// get cookies
$(".sugarcookie").html(Cookies.get("sugar"));
$(".chocolatecookie").html(Cookies.get("choc_cookie"));
$(".lemoncookie").html(Cookies.get("lemon_cookie"));
// set the cookies
$(".sugarcookie").click(function(){
  sugar_cookie+= 1;
  Cookies.set("sugarcookie", sugar_cookie);
  $(".sugarcookie").html(Cookies.get("sugar_cookie"));
});

$(".lemoncookie").click(function(){
  chocolate+=1;
  Cookies.set("lemoncookie", lemon_cookie);
  $(".lemoncookie").html(lemon_cookie);
});

$(".chocolatecookie").click(function(){
  chocolate+=1;
  Cookies.set("chocolatecookie", choc_cookie);
  $(".chocolatecookie").html(choc_cookie);
});

$("button").click(function(){
  Cookies.expire("sugar_cookie");
  Cookies.expire("lemon_cookie");
  Cookies.expire("choc_cookie");
})

});

