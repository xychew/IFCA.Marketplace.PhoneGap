module Marketplace {
    export class AboutUsUI {

        DisplayAboutUs(value:any) {

            $("#companyLogo").attr("src", value.picture);

            $("#companyDescription").html(value.CompanyDecription);

            $("#companyAddress").html(value.CompanyAddress);

            $("#companyAddress").append("Tel: " + value.Phone + "<br/>");

            $("#companyAddress").append("Fax No.: " + value.FaxNo + "<br/>");

            $("#companyAddress").append("Email: " + value.Email + "<br/>");

            $("#companyAddress").append("URL: " + value.URL + "<br/>");

        }
    }
}  

$(document).one('pagebeforecreate', '#aboutus', function () {

    var AboutUs = new Marketplace.AboutUs();
    var AboutUsData = AboutUs.GetAboutUs();
    var AboutUsUI = new Marketplace.AboutUsUI();

    AboutUsUI.DisplayAboutUs(AboutUsData);

});