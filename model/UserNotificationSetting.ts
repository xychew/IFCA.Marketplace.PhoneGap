module Marketplace {
    export module Model {
        export class UserNotificationSetting{

            _UserID: number;
            _NotificationTypeCode: string;
            _IsActivated: any;

            _NotificationType: NotificationType;
            _User:User;

            constructor() {
                this._NotificationType = new NotificationType();
                this._User = new User();
            }

        }
    }

}   