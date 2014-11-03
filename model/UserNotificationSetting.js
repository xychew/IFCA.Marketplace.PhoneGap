var Marketplace;
(function (Marketplace) {
    (function (Model) {
        var UserNotificationSetting = (function () {
            function UserNotificationSetting() {
                this._NotificationType = new Model.NotificationType();
                this._User = new Model.User();
            }
            return UserNotificationSetting;
        })();
        Model.UserNotificationSetting = UserNotificationSetting;
    })(Marketplace.Model || (Marketplace.Model = {}));
    var Model = Marketplace.Model;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=UserNotificationSetting.js.map
