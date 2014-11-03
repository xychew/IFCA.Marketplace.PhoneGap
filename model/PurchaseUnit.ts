module Marketplace {

    export module Model {

        export class PurchaseUnit {

            _PurchaseUnitID: number;
            _UnitNo: string;
            _BlockName: string;
            _PhaseName: string;
            _ProjectName: string;
            _UnitTypeCode: string;
            _Location: string;
            _CompanyName: string;
            _TenureCode: string;
            _PropertyTypeCode: string;
            _BuildUp: number;
            _LandArea: number;
            _PurchaseID: number;
            _DevelopmentID: number;
            _ModifiedDate: Date;
            _CreatedDate: Date;

            _Defect: Array<Defect>;
            _Development: Development;
            _KeyCollection: Array<KeyCollection>;
            _UserPurchaseUnit: Array<UserPurchaseUnit>;
            _UnitType: UnitType;
            _FinancialPurchaseUnit: Array<FinancialPurchaseUnit>;
            _Tenure: Tenure;
            _PropertyType: PropertyType;
            _Purchaser: Purchaser;
            _SolicitorPurchaseUnit: Array<SolicitorPurchaseUnit>;
            _Milestones: Array<Milestones>;
            _Statement: Array<Statement>;

           
            constructor() {
                this._Purchaser = new Purchaser();
                this._Development = new Development();
                this._Tenure = new Tenure();
                this._UnitType = new UnitType();
                this._PropertyType = new PropertyType();
            }
        }
    }
} 