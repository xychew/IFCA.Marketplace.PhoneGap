var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Promoter = (function () {
            function Promoter() {
                this._User = new Model.User();
                this._PromoterType = new Model.PromoterType();
            }
            return Promoter;
        })();
        Model.Promoter = Promoter;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Promoter.js.map
