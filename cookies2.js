var sugar = 0;
var chocolate = 0;
var lemon = 0;

$("#SugarTotal").html(sugar);
$("#ChocolateTotal").html(chocolate);
$("#LemonTotal").html(lemon);

$(document).ready(function() {
    
    $("#SugarTotal").html(Cookies.get("sugar"));
    $("#ChocolateTotal").html(Cookies.get("chocolate"));
    $("#LemonTotal").html(Cookies.get("lemon"));
    
    $("#sugar").click(function() {
        sugar++;
        Cookies.set("sugar", sugar);
        $("#SugarTotal").html(Cookies.get("sugar"));
    });
    
    $("#clearsugar").click(function() {
        sugar = 0
        Cookies.set("sugar", sugar);
        $("#SugarTotal").html(Cookies.get("sugar"));
    });
    
    $("#chocolate").click(function() {
        chocolate++;
        Cookies.set("chocolate", chocolate);
        $("#ChocolateTotal").html(Cookies.get("chocolate"));
    });
    
     $("#clearchocolate").click(function() {
        chocolate = 0
        Cookies.set("chocolate", chocolate);
         $("#ChocolateTotal").html(Cookies.get("chocolate"));
    });
    
    $("#lemon").click(function() {
        lemon++;
        Cookies.set("lemon", lemon);
        $("#LemonTotal").html(Cookies.get("lemon"));
    });
    
     $("#clearlemon").click(function() {
        lemon = 0
        Cookies.set("lemon", lemon);
        $("#LemonTotal").html(Cookies.get("lemon"));
    });
    
});
