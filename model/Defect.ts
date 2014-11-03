module Marketplace {

    export module Model {

        export class Defect {

            _DefectID: number;
            _PurchaseUnitID: number;
            _Subject: string;
            _ReportDate: Date;
            _StatusCode: string;
            _DefectTypeCode: string;
            _Description: string;
            _DefectPicture: Array<DefectPicture>;
            _DefectType: DefectType;
            _PurchaseUnit: PurchaseUnit;

            constructor() {
                this._DefectType= new DefectType();
                this._PurchaseUnit = new PurchaseUnit();
            }
        }
    }
} 