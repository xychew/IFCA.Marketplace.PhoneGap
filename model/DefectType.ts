module Marketplace {
    export module Model {
        

        export class DefectType
        {
            _DefectTypeCode: string;
            _DefectType: string;
            _ContractorID: number;
            _Contractor: Contractor;
            
            constructor() {

                this._Contractor = new Contractor();
   
            }
        }

    }
}