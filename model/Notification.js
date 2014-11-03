var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var Notification = (function () {
            function Notification() {
                this._NotifcationType = new Model.NotificationType();
            }
            return Notification;
        })();
        Model.Notification = Notification;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Notification.js.map
