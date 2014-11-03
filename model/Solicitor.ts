module Marketplace {

    export module Model {

        export class Solicitor {

            _SolicitorID: number;
            _Name: string;
            _Phone: number;
            _FaxNo: string;
            _EMail: string;
            _ReferenceNo: string;
            _SolicitorType: string;
          
            _SolicitorPurchaseUnit: Array<SolicitorPurchaseUnit>;

            constructor() {

            }

        }

    }

}         