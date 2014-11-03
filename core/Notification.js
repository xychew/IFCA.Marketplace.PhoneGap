var Marketplace;
(function (Marketplace) {
    var Notification = (function () {
        function Notification() {
        }
        Notification.prototype.GetContact = function () {
            var contacts = [];

            var contact1 = {
                ContactID: "1",
                ContactName: "James Tao",
                PhoneNo: "03-111223334",
                Email: "",
                Position: "Manager"
            };

            var contact2 = {
                ContactID: "2",
                ContactName: "David Lau",
                PhoneNo: "03-333445556",
                Email: "",
                Position: "Supervisor"
            };

            var contact3 = {
                ContactID: "3",
                ContactName: "Camy",
                PhoneNo: "03-444116665",
                Email: "",
                Position: "Banker"
            };

            var contact4 = {
                ContactID: "4",
                ContactName: "Kenji Chow",
                PhoneNo: "03-999001116",
                Email: "",
                Position: "Solicitor"
            };

            contacts.push(contact1);
            contacts.push(contact2);
            contacts.push(contact3);
            contacts.push(contact4);

            return contacts;
        };

        Notification.prototype.GetPromotion = function () {
            var promotions = [];

            var promotion1 = {
                Title: "New Launches From SP Setia",
                SubTitle: "Eco Pack",
                Description: "Eco Pack",
                Picture: "images/image.png"
            };

            var promotion2 = {
                Title: "New Launches From SP Setia",
                SubTitle: "Eco Pack",
                Description: "Eco Pack",
                Picture: "images/image.png"
            };

            var promotion3 = {
                Title: "New Launches From SP Setia",
                SubTitle: "Eco Pack",
                Description: "Eco Pack",
                Picture: "images/image.png"
            };

            promotions.push(promotion1);
            promotions.push(promotion2);
            promotions.push(promotion3);

            return promotions;
        };
        return Notification;
    })();
    Marketplace.Notification = Notification;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Notification.js.map
