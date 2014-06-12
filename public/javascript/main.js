$(document).ready(function(){

    $("button.btn.btn-success.btn-lg.btn-block").click(function(){
        $.ajax("http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=1").done(function(resp){
            $(".alert.alert-info").text("We have open your device!");
            $(".alert.alert-info").show();        
            setTimeout(function(){
                $(".alert.alert-info").hide();            
            }, 2000);
        });
    });

    $("button.btn.btn-danger.btn-lg.btn-block").click(function(){
        $.ajax("http://198.199.114.228:8080/devices?key="+window.location.pathname.split("/")[2]+"&to=0").done(function(resp){
            $(".alert.alert-info").text("We have closed your device!");
            $(".alert.alert-info").show();        
            setTimeout(function(){
                $(".alert.alert-info").hide();            
            }, 2000);
        });
    });

});