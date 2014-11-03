module Marketplace {
    export class MyAccount {

        GetMyAccountList() {

            var myAccountList = [];

            var myAccount1 = {
                StatementNo: "MY1",
                PhaseName: "Mama Condo",
                UnitTypeCode: "A-3-1",
                Balance: "100,000.00",
                DueDate: "21/9/2014",
                Transaction: [
                    {
                        Date: "13/1/2014",
                        Description: "Signing of the Agreement",
                        Amount: "33,000"
                    },
                    {
                        Date: "14/3/2014",
                        Description: "Completion of Foundation & Footing Works",
                        Amount: "(33,000)"
                    }
                ]
            };

            var myAccount2 = {
                StatementNo: "MY2",
                PhaseName: "Kaka Condo",
                UnitTypeCode: "C-12-3",
                Balance: "150,000.00",
                DueDate: "25/12/2014",
                Transaction: [
                    {
                        Date: "13/1/2014",
                        Description: "Signing of the Agreement",
                        Amount: "100,000"
                    },
                    {
                        Date: "14/3/2014",
                        Description: "Completion of Foundation & Footing Works",
                        Amount: "(33,000)"
                    },
                    {
                        Date: "4/5/2014",
                        Description: "Completion of Concrete Framework",
                        Amount: "(10,000)"
                    }
                ]
            };

            var myAccount3 = {
                StatementNo: "MY3",
                PhaseName: "Wawa Condo",
                UnitTypeCode: "A-11-1",
                Balance: "172,000.00",
                DueDate: "19/3/2014",
                Transaction: [
                    {
                        Date: "12/5/2014",
                        Description: "Completion of Concrete Framework",
                        Amount: "(10,000)"
                    }
                ]
            };

            myAccountList.push(myAccount1);
            myAccountList.push(myAccount2);
            myAccountList.push(myAccount3);

            return myAccountList;
        }

    }
} 