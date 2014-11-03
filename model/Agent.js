var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Agent = (function () {
            function Agent() {
                this._Promoter = new Model.Promoter();
            }
            return Agent;
        })();
        Model.Agent = Agent;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Agent.js.map
