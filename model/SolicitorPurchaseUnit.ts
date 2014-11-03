module Marketplace {

    export module Model {

        export class SolicitorPurchaseUnit {

            _SolicitorID: number;
            _PurchaseUnitID: number;
            _Description: string;

            _Solicitor: Solicitor;

            constructor() {
                this._Solicitor = new Solicitor();
            }

        }

    }

}         