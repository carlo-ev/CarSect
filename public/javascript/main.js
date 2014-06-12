$(document).ready(function(){

    $("button.btn.btn-success.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=1",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        });
        $(".alert.alert-info").text("We are now opening your device!");
        setTimeout(function(){
            $(".alert.alert-info").show(1000);   
        }, 15000);     
        setTimeout(function(){
            $(".alert.alert-info").hide(1000);            
        }, 25000);
    });

    $("button.btn.btn-danger.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=0",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        });
        $(".alert.alert-info").text("We are now closing your device!");
        setTimeout(function(){
            $(".alert.alert-info").show(1000);   
        }, 15000);     
        setTimeout(function(){
            $(".alert.alert-info").hide(1000);            
        }, 25000);
    });

});