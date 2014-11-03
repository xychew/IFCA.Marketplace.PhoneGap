var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var UserContact = (function () {
            function UserContact() {
                this._User = new Model.User();
                this._Contact = new Model.Contact();
            }
            return UserContact;
        })();
        Model.UserContact = UserContact;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=UserContact.js.map
