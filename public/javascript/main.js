$(document).ready(function(){

    $("button.btn.btn-success.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=1",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        }).done(function(resp){
            console.log(resp);
            $(".alert.alert-info").text("We have open your device!");
            $(".alert.alert-info").show();        
            setTimeout(function(){
                $(".alert.alert-info").hide();            
            }, 2000);
        });
    });

    $("button.btn.btn-danger.btn-lg.btn-block").click(function(){
        $.ajax({
            url: "http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=0",
            type: "GET",
            crossDomain: true,
            dataType: "JSONP"
        }).done(function(resp){
            console.log(resp);
            $(".alert.alert-info").text("We have open your device!");
            $(".alert.alert-info").show();        
            setTimeout(function(){
                $(".alert.alert-info").hide();            
            }, 2000);
        });
    });

});