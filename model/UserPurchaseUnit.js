var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var UserPurchaseUnit = (function () {
            function UserPurchaseUnit() {
                this._User = new Model.User();
                this._PurchaseUnit = new Model.PurchaseUnit();
            }
            return UserPurchaseUnit;
        })();
        Model.UserPurchaseUnit = UserPurchaseUnit;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=UserPurchaseUnit.js.map
