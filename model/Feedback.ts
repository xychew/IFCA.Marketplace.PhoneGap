module Marketplace {

    export module Model {

        export class Feedback {

            _FeedbackID: number;
            _PostedDate: Date;
            _FeedbackTypeCode: string;
            _Comments: string;
            _UserID: number;
            _PromoterID: number;

            _Promoter: Promoter;
            _User: User;
            _FeedbackType: FeedbackType;

            constructor() {
                this._User = new User();
                this._Promoter = new Promoter();
                this._FeedbackType = new FeedbackType();
            }

        }

    }

}             