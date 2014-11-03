var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Property = (function () {
            function Property() {
                this._Address = new Model.Address();
                this._Development = new Model.Development();
            }
            return Property;
        })();
        Model.Property = Property;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Property.js.map
