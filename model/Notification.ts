module Marketplace {
    export module Model {
        export class Notification {
            _NotificationID: number;
            _PromoterID: number;
            _Message: string;
            _CreatedDate: Date;
            _PostingAt: Date;
            _NotificationTypeCode: string;
     
            _NotifcationType: NotificationType;


            constructor() {
                this._NotifcationType=new NotificationType();

            }

        }
    }

} 