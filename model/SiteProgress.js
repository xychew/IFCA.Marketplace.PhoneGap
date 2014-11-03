var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var SiteProgress = (function () {
            function SiteProgress() {
                this._Development = new Model.Development();
            }
            return SiteProgress;
        })();
        Model.SiteProgress = SiteProgress;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=SiteProgress.js.map
