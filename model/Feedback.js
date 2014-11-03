var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Feedback = (function () {
            function Feedback() {
                this._User = new Model.User();
                this._Promoter = new Model.Promoter();
                this._FeedbackType = new Model.FeedbackType();
            }
            return Feedback;
        })();
        Model.Feedback = Feedback;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Feedback.js.map
