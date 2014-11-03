var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var User = (function () {
            function User() {
                this._Address = new Model.Address();
                // this._SourceOrigin = new SourceOrigin();
            }
            return User;
        })();
        Model.User = User;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=User.js.map
