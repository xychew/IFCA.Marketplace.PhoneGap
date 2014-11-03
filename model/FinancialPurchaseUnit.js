var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var FinancialPurchaseUnit = (function () {
            function FinancialPurchaseUnit() {
                this._Financial = new Model.Financial();
                this._PurchaseUnit = new Model.PurchaseUnit();
            }
            return FinancialPurchaseUnit;
        })();
        Model.FinancialPurchaseUnit = FinancialPurchaseUnit;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=FinancialPurchaseUnit.js.map
