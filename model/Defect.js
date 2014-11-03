var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Defect = (function () {
            function Defect() {
                this._DefectType = new Model.DefectType();
                this._PurchaseUnit = new Model.PurchaseUnit();
            }
            return Defect;
        })();
        Model.Defect = Defect;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Defect.js.map
