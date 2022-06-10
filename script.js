$(document).ready(function () {


    // data reload start
    $("#nineAM").append(localStorage.getItem("9am"));
    $("#tenAM").append(localStorage.getItem("10am"));
    $("#elevenAM").append(localStorage.getItem("11am"));
    $("#twelvePM").append(localStorage.getItem("12pm"));
    $("#onePM").append(localStorage.getItem("1pm"));
    $("#twoPM").append(localStorage.getItem("2pm"));
    $("#threePM").append(localStorage.getItem("3pm"));
    $("#fourPM").append(localStorage.getItem("4pm"));
    $("#fivePM").append(localStorage.getItem("5pm"));
    // data reload end


    // current day display
    var date = new Date();
    $("#currentDay").text(moment().format('MMMM Do YYYY'));


    // standard hours time blocks start
    $(".container").children().each(function () {
        if (parseInt($(this).attr("id").replace("t", "")) < date.getHours()) {
            $(this).addClass("past")
        }
        else if (parseInt($(this).attr("id").replace("t", "")) == date.getHours()) {
            $(this).addClass("present")
        }
        else { $(this).addClass("future") }
    })
    // standard hours time blocks end

    // info for individual times
   
   
    // 9am
    $('#saveButton9am').click(function () {
        saveTasks9();
    });
    var saveTasks9 = function () {
        var nineValue = $("#nineAM").val();
        localStorage.setItem("9am", JSON.stringify(nineValue));
    };
   
   
    // 10am
    $('#saveButton10am').click(function () {
        saveTasks10();
    });
    var saveTasks10 = function () {
        var tenValue = $("#tenAM").val();
        localStorage.setItem("10am", JSON.stringify(tenValue));
    };
   
   
    // 11am
    $('#saveButton11am').click(function () {
        saveTasks11();
    });
    var saveTasks11 = function () {
        var elevenValue = $("#elevenAM").val();
        localStorage.setItem("11am", JSON.stringify(elevenValue));
    };
  
  
    // 12pm
    $('#saveButton12pm').click(function () {
        saveTasks12();
    });
    var saveTasks12 = function () {
        var twelveValue = $("#twelvePM").val();
        localStorage.setItem("12pm", JSON.stringify(twelveValue));
    };
  
  
    // 1pm
    $('#saveButton1pm').click(function () {
        saveTasks13();
    });
    var saveTasks13 = function () {
        var thirteenValue = $("#onePM").val();
        localStorage.setItem("1pm", JSON.stringify(thirteenValue));
    };
 
 
    // 2pm
    $('#saveButton2pm').click(function () {
        saveTasks14();
    });
    var saveTasks14 = function () {
        var fourteenValue = $("#twoPM").val();
        localStorage.setItem("2pm", JSON.stringify(fourteenValue));
    };
   
   
    // 3pm
    $('#saveButton3pm').click(function () {
        saveTasks15();
    });
    var saveTasks15 = function () {
        var fifteenValue = $("#threePM").val();
        localStorage.setItem("3pm", JSON.stringify(fifteenValue));
    };
   
   
    // 4pm
    $('#saveButton4pm').click(function () {
        saveTasks16();
    });
    var saveTasks16 = function () {
        var sixteenValue = $("#fourPM").val();
        localStorage.setItem("4pm", JSON.stringify(sixteenValue));
    };
  
  
    // 5pm
    $('#saveButton5pm').click(function () {
        saveTasks17();
    });
    var saveTasks17 = function () {
        var seventeenValue = $("#fivePM").val();
        localStorage.setItem("5pm", JSON.stringify(seventeenValue));
    };

});