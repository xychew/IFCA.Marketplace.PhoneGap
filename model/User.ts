module Marketplace {
   export module Model {
        export class User {
            _UserID: number;
            _Username: string;
            _FullName: string;
            _Email: string;
            _MobileNumber: string;
            _DefaultPassword: string;
            _IdentityNo: string;
            _DateOfBirth:Date;
            _Nationality: string;
            _Race: string;
            _Gender: string;
            _BumiputraStatus: any;
            _Remarks: string;
            _SourceOriginCode: string;
            _SourceReferenceID: string;
            _StatusCode: string;
            _CreatedDate: Date;
            _ModifiedDate: Date;
            _AddressID: number;

            //_Address: Marketplace.Model.Address;
            _UserContact: Array<UserContact>;
            _Promoter: Array<Promoter>;
            _UserPurchaseUnit: Array<UserPurchaseUnit>;
            _UserNotificationSetting: Array<UserNotificationSetting>;
            _Address: Address;
            _SourceOrigin: SourceOrigin;
            _Feedback: Array<Feedback>;
            


            constructor() {
                this._Address = new Address();
               // this._SourceOrigin = new SourceOrigin();
            }

        }
    }

}