module Marketplace {
    export class LoginRegisterUI {
    }
}

$(document).on('pagecreate', '#splashscreen', function () {

    setTimeout(function () {
        window.location.href = "#login";
    }, 1500);

});

$(document).on('pagecreate', '#login', function () {

    $("#btnLogin").on("click", function (event) {
        window.location.href = "notifications.html";
    });

});

$(document).on('pagecreate', '#register', function () {

    $("#btnRegister").on("click", function (event) {
        window.location.href = "#guidelines";
    });

});

$(document).on('pagecreate', '#guidelines', function () {

    $("#btnAccept").on("click", function (event) {
        window.location.href = "#activation";
    });

    $("#btnDecline").on("click", function (event) {
        window.location.href = "#register";
    });

});

$(document).on('pagecreate', '#activation', function () {

    $("#btnActivate").on("click", function (event) {
        window.location.href = "#createpage";
    });

});

$(document).on('pagecreate', '#createpage', function () {

    $("#btnCreatePassword").on("click", function (event) {
        window.location.href = "notifications.html";
    });

});

$(document).on('pagecreate', '#forgetpassword', function () {

    $("#btnGetCode").on("click", function (event) {
        window.location.href = "#activation";
    });

});