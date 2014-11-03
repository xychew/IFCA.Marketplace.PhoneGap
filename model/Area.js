var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Area = (function () {
            function Area() {
                this._City = new Model.City();
            }
            return Area;
        })();
        Model.Area = Area;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Area.js.map
