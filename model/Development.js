var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Development = (function () {
            function Development() {
                this._Developer = new Model.Developer();
                this._Promoter = new Model.Promoter();
                this._Address = new Model.Address();
            }
            return Development;
        })();
        Model.Development = Development;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Development.js.map
