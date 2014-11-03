var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var SolicitorPurchaseUnit = (function () {
            function SolicitorPurchaseUnit() {
                this._Solicitor = new Model.Solicitor();
            }
            return SolicitorPurchaseUnit;
        })();
        Model.SolicitorPurchaseUnit = SolicitorPurchaseUnit;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=SolicitorPurchaseUnit.js.map
