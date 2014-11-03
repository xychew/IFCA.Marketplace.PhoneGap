var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Milestones = (function () {
            function Milestones() {
                this._MilestonesType = new Model.MilestonesType();
                this._PurchaseUnit = new Model.PurchaseUnit();
            }
            return Milestones;
        })();
        Model.Milestones = Milestones;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Milestones.js.map
