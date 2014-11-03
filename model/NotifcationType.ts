module Marketplace {
    export module Model {
        export class NotificationType {

            _NotificationTypeCode: string;
            _NotificationType: string;
            _CreatedDate: Date;
            _ModifiedDate: Date;
            
            _Notification: Array<Notification>;
            _UserNotificationSetting: Array<UserNotificationSetting>;

            constructor() {

            }

        }
    }

}  