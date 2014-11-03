module Marketplace {

    export module Model {

        export class KeyCollection {
            _KeyCollectionID: number;
            _PurchaseUnitID: number;
            _CollectionDate: Date;
            _IsBooked: boolean;
            _PurchaseUnit: PurchaseUnit;

            constructor() {
                this._PurchaseUnit = new PurchaseUnit();
            }
        }
    }
} 