module Marketplace {

    export module Model {

        export class FinancialPurchaseUnit {

            _PurchaseUnitID: number;
            _FinancialID: number;
         
            _PurchaseUnit: PurchaseUnit;
            _Financial: Financial;

            constructor() {
                this._Financial = new Financial();
                this._PurchaseUnit = new PurchaseUnit();

            }

        }

    }

}     