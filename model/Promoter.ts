module Marketplace {
    export module Model {
        export class Promoter {
            _PromoterID: number;
            _FullName: string;
            _PromoterTypeCode: string;
            _Username: string;
            _Email: string;
            _MobileNumber:number;
            _UserID: number;
              
            _User: User;
            _Notification: Array<Notification>;
            _Feedback: Array<Feedback>;
            _Agent: Array<Agent>;
            _Development: Array<Development>;
            _PromoterType: PromoterType;
        
            constructor() {
                this._User = new User();
                this._PromoterType = new PromoterType();
            }

        }
    }

} 