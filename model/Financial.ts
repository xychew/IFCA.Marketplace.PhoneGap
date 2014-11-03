module Marketplace {

    export module Model {

        export class Financial {

            _FinancialID: number;
            _FinancialName: string;
            _Address: string;
            _Phone: number;
            _PersonInCharge: string;

            _FinancialPurchaseUnit: Array<FinancialPurchaseUnit>;
            constructor() {

            }

        }

    }

}      