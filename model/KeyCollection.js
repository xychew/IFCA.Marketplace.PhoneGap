var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var KeyCollection = (function () {
            function KeyCollection() {
                this._PurchaseUnit = new Model.PurchaseUnit();
            }
            return KeyCollection;
        })();
        Model.KeyCollection = KeyCollection;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=KeyCollection.js.map
