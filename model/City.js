var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var City = (function () {
            function City() {
                this._State = new Model.State();
            }
            return City;
        })();
        Model.City = City;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=City.js.map
