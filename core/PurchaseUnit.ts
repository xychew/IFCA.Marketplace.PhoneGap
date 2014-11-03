module Marketplace {
    export class PurchaseUnit {

        //username: string;
        //age: number;

        //constructor(username: string, age: number) {
        //    this.username = username;
        //    this.age = age;
        //}

        //displayAge() {
        //    return "my age is " + this.age;
        //}


        GetPurchaserUnits() {

            var purchaseUnits = [];

            var purchaseUnit1 = {
                PurchaseUnitID: "P1",
                PropertyDetails: {
                    CompanyName: "IFCA Reality",
                    ProjectName: "SKYPARK",
                    PhaseName: "SKYPARK",
                    BlockName: "A",
                    UnitTypeCode: "A-3-1",
                    PropertyType: "Condominium",
                    PropertyTenure: "-",
                    BuiltUp: "1,011.00",
                    Location: "Damansara",
                    UnitType: "Comer Lot",
                    LandArea: "0.00"
                },
                PurchaseContracts: {
                    MainBuyerName: "Chloe Yeoh",
                    JointBuyerName: "-",
                    PurchasePrice: "3334,883.00",
                    HandoverDate: "1/3/2015",
                    DefectsLiabilityPeriodDate: "14/5/2014",
                    IdentityNo: "880506-07-5330",
                    SalesPurchaseAgreementDate: "13/1/2014",
                    VacantPossesionDate: "21/1/2015",
                    ExtraDefectsLiabilityDate: "28/7/2014"
                },
                Solicitor:
                [
                    {
                        ReferenceNo: "1028123",
                        Name: "Anuar Hong",
                        Phone: "03-91300666",
                        FaxNo: "03-91300777",
                        Email: "hong@gmail.com",
                    }
                ],
                FinancialInfo:
                [
                    {
                        BankName: "CIMB Bank",
                        BankAddress: "Jalan Tuanku Abdul Rahman 50100 Kuala Lumpur",
                        PersonInCharge: "Jason Chan",
                        BankPhone: "03-11122255",
                        BankEmail: "jason@gmail.com",
                        BankFaxNo: "03-11122233"
                    }
                ]

            }

            var purchaseUnit2 = {
                PurchaseUnitID: "P2",
                PropertyDetails: {
                    CompanyName: "IFCA Reality 2",
                    ProjectName: "SKYPARK 2",
                    PhaseName: "SKYPARK 2",
                    BlockName: "A",
                    UnitTypeCode: "A-3-2",
                    PropertyType: "Condominium 2",
                    PropertyTenure: "-",
                    BuiltUp: "1,011.00",
                    Location: "Damansara",
                    UnitType: "Comer Lot",
                    LandArea: "0.00"
                },
                PurchaseContracts:
                    {
                        MainBuyerName: "Hendrick Ooi",
                        JointBuyerName: "-",
                        PurchasePrice: "3334,883.00",
                        HandoverDate: "1/3/2015",
                        DefectsLiabilityPeriodDate: "14/5/2014",
                        IdentityNo: "880506-07-5330",
                        SalesPurchaseAgreementDate: "13/1/2014",
                        VacantPossesionDate: "21/1/2015",
                        ExtraDefectsLiabilityDate: "28/7/2014"
                    },
                Solicitor:
                [
                    {
                        ReferenceNo: "1028123",
                        Name: "Yung Hong",
                        Phone: "03-91300666",
                        FaxNo: "03-91300777",
                        Email: "hong@gmail.com"
                    },
                    {
                        ReferenceNo: "1010103",
                        Name: "Yung Suu",
                        Phone: "03-91300666",
                        FaxNo: "03-91300777",
                        Email: "Suu@gmail.com"
                    }
                ],
                FinancialInfo:
                [
                    {
                        BankName: "Public Bank",
                        BankAddress: "JalanTuanku Abdul Rahman 50100 Kuala Lumpur",
                        PersonInCharge: "Jason Chan",
                        BankPhone: "03-11122255",
                        BankEmail: "jason@gmail.com",
                        BankFaxNo: "03-11122233"
                    },
                    {
                        BankName: "May Bank",
                        BankAddress: "Jalan Bunga Raya 533300 KL",
                        PersonInCharge: "Jason Ooi",
                        BankPhone: "03-11122255",
                        BankEmail: "jason@gmail.com",
                        BankFaxNo: "03-11122233"
                    }
                ]
            }

            purchaseUnits.push(purchaseUnit1);
            purchaseUnits.push(purchaseUnit2);

            return purchaseUnits;

        }
    }

}