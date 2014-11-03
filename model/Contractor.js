var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Contractor = (function () {
            function Contractor() {
                this._Contact = new Model.Contact();
            }
            return Contractor;
        })();
        Model.Contractor = Contractor;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Contractor.js.map
