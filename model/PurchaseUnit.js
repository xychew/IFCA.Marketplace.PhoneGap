var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var PurchaseUnit = (function () {
            function PurchaseUnit() {
                this._Purchaser = new Model.Purchaser();
                this._Development = new Model.Development();
                this._Tenure = new Model.Tenure();
                this._UnitType = new Model.UnitType();
                this._PropertyType = new Model.PropertyType();
            }
            return PurchaseUnit;
        })();
        Model.PurchaseUnit = PurchaseUnit;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=PurchaseUnit.js.map
