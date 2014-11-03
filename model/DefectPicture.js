var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var DefectPicture = (function () {
            function DefectPicture() {
                this._Defect = new Model.Defect();
            }
            return DefectPicture;
        })();
        Model.DefectPicture = DefectPicture;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=DefectPicture.js.map
