module Marketplace {

    export class NotificationUI {

        contacts: any = [];
        promotions: any = [];

        AddContact(item: any) {
            this.contacts.push(item);
        }

        AddPromotion(item: any) {
            this.promotions.push(item);
        }

        DisplayContactList() {
            $("#contentListView").html("");
            $.each(this.contacts, function (index, value) {
                $("#contentListView").append("<li data-role='list-divider' class='center'>Name: " + value.ContactName + "<br />Post: " + value.Position + " <br />Tel: " + value.PhoneNo + " </li >");
            });
            $("#contentListView").listview("refresh");
        }

        DisplayPromotionList() {
            $("#promotionsListView").html("");
            $.each(this.promotions, function (index, value) {
                $("#promotionsListView").append("<li data-role='list-divider'>Promotion<span class='notificationDeleteIcon'><a href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-inline' data-direction='reverse' rel='external'>Power Icon</a></span><br /><br /><img class='notificationImage' src ='" + value.Picture + "' /><h4>" + value.Title + "</h4><p>" + value.SubTitle + "</p></li><br />");
            });
            $("#promotionsListView").listview("refresh");
        }

    }
}

$(document).on('pagebeforecreate ', '#notification', function () {


    $("#notification").on("swiperight", swiperightHandler_Notification);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_Notification(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("#menu", {
            transition: "slide",
            reverse: true
        });
    }

    $("#notification").on("swipeleft", swipeleftHandler_Notification);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Notification(event) {

        $.mobile.changePage("#contactus", {
            transition: "slide",
            reverse: false
        });
    }

});

$(document).on('pageinit', '#contactus', function () {
    var notification = new Marketplace.Notification();

    var contactList = notification.GetContact();

    var NotificationUI = new Marketplace.NotificationUI();

    $.each(contactList, function (index, value) {
        NotificationUI.AddContact(value);
    });

    NotificationUI.DisplayContactList();
});


$(document).on('pageinit', '#notification', function () {

    var notification = new Marketplace.Notification();

    var promotionList = notification.GetPromotion();

    var NotificationUI = new Marketplace.NotificationUI();

    $.each(promotionList, function (index, value) {
        NotificationUI.AddPromotion(value);
    });

    NotificationUI.DisplayPromotionList();

});

$(document).on('pagebeforecreate ', '#menu', function () {
    $("#menu").on("swipeleft", swipeleftHandler_Menu);

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler_Menu(event) {

        $.mobile.changePage("#notification", {
            transition: "slide",
            reverse: false
        });
    }
});

$(document).on('pagebeforecreate ', '#contactus', function () {
    $("#contactus").on("swiperight", swiperightHandler_ContactUs);

    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler_ContactUs(event) {
        //window.location.href = "menu.html";

        $.mobile.changePage("#notification", {
            transition: "slide",
            reverse: true
        });
    }
});