var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var DefectType = (function () {
            function DefectType() {
                this._Contractor = new Model.Contractor();
            }
            return DefectType;
        })();
        Model.DefectType = DefectType;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=DefectType.js.map
