module Marketplace {
    export module Model {
        export class UserPurchaseUnit {
            _UserID: number;
            _PurchaseUnitID: number;

            _User: User;
            _PurchaseUnit: PurchaseUnit;

            constructor() {
                this._User = new User();
                this._PurchaseUnit = new PurchaseUnit();
            }

        }
    }

} 