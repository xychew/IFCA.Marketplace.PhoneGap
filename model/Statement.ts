module Marketplace {
   export module Model {
        export class Statement {
            _StatementNo: string;
            _Date: Date;
            _DueDate: Date;
            _Description: string;
            _Debit: any;
            _Credit: any;
            _Balance: any;
            _PurchaseUnitID: number;

            _PurchaseUnit: PurchaseUnit;

            constructor() {
            
            }

        }
    }

} 