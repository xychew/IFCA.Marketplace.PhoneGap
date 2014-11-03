var Marketplace;
(function (Marketplace) {
    var MConfig = (function () {
        function MConfig() {
            this.MARKETPLACE_API_SERVER = "http://localhost:22529";
        }
        MConfig.prototype.GetAPI = function () {
            return this.MARKETPLACE_API_SERVER;
        };
        return MConfig;
    })();
    Marketplace.MConfig = MConfig;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=MConfig.js.map
