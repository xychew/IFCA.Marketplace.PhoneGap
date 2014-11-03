module Marketplace {
    export module Model {
        export class Purchaser {
            _PurchaserID: number;
            _MainBuyerName: string;
            _JointBuyerName: string;
            _HandoverDate: Date;
            _MainBuyerIdentityNo: string;
            _JointBuyerIdentityNo: string;
            _PurchasePrice: number;
            _SPADate: Date;
            _VacantPossessionDate: Date;
            _DefectsLiabilityPeriodDate: Date;
            _ExtraDefectsLiabilityDate: Date;

            _PurchaseUnit: Array<PurchaseUnit>;


            constructor() {
 
            }

        }
    }

} 