var Marketplace;
(function (Marketplace) {
    (function (UI) {
        var PersonalProfileUI = (function () {
            function PersonalProfileUI() {
            }
            PersonalProfileUI.prototype.UpdatePersonalListView = function (value) {
                $("#lblName").html(value.Name);

                $("#lblIdentityType").html(value.IdentityType);

                $("#lblIdentityNo").html(value.IdentityNo);

                $("#lblDOB").html(value.DateOfBirth);

                $("#lblNationality").html(value.Nationality);

                $("#lblRace").html(value.Race);

                $("#lblGender").html(value.Gender);

                $("#lblBumiputeraStatus").html(value.BumiputeraStatus);

                $("#txtAddress").val(value.Address);

                $("#txtEmail").val(value.Email);

                $("#txtContactNo").val(value.ContactNo);

                $("#txtMartialStatus").val(value.MartialStatus);

                $("#txtPostcode").val(value.Postcode);
            };

            PersonalProfileUI.prototype.Populate = function (user) {
                $("#lblName").html(user._FullName);

                //  $("#lblIdentityType").html(user._IdentityNo);
                $("#lblIdentityNo").html(user._IdentityNo);

                $("#lblDOB").html(user._DateOfBirth.toString());

                $("#lblNationality").html(user._Nationality);

                $("#lblRace").html(user._Race);

                $("#lblGender").html(user._Gender);

                $("#lblBumiputeraStatus").html(user._BumiputraStatus);

                $("#txtAddress").val(user._Address._StreetAddress);

                $("#txtEmail").val(user._Email);

                $("#txtContactNo").val(user._MobileNumber);
                //$("#txtMartialStatus").val(user.MartialStatus);
                //    $("#txtPostcode").val(user._Address._PostCode.toString());
            };
            return PersonalProfileUI;
        })();
        UI.PersonalProfileUI = PersonalProfileUI;
    })(Marketplace.UI || (Marketplace.UI = {}));
    var UI = Marketplace.UI;
})(Marketplace || (Marketplace = {}));

$(document).one('pagebeforecreate', '#personalProfile', function () {
    var personal = new Marketplace.Core.PersonalProfile(1);

    // var value = personal.GetPersonalProfileDetail();
    var user = personal.GetUser();

    var personalUI = new Marketplace.UI.PersonalProfileUI();

    //personalUI.UpdatePersonalListView(value);
    personalUI.Populate(user);
    //$("#personal-profile-save").click(function () {
    //    personal.SaveProfile();
    //});
});
//# sourceMappingURL=PersonalProfileUI.js.map
