$(document).ready(function(){

    $("button.btn.btn-success.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=1",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        });
        $(".alert.alert-info").text("We are now opening your device!");
        $(".alert.alert-info").show(1000);        
        setTimeout(function(){
            $(".alert.alert-info").hide(2500);            
        }, 3000);
    });

    $("button.btn.btn-danger.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=0",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        });
        $(".alert.alert-info").text("We are now closing your device!");
        $(".alert.alert-info").show(1000);        
        setTimeout(function(){
            $(".alert.alert-info").hide(2500);            
        }, 3000);
    });

});