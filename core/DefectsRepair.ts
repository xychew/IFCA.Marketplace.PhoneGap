module Marketplace {
    export class DefectsRepair {

        GetDefect_PuchaseUnit() {

            var puchaseUnit = [];

            var unit1 = {
                PurchaseUnitID : "1",
                PhaseName: "Dua Sentral",
                UnitTypeCode: "A-10-20",
                Defect:
                [
                    { DefectID: "1", Subject: "Flooring Repair", ReportedDate: "1/9/2014", Status: "Done", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png"},
                    { DefectID: "2", Subject: "Roof-Top Repair", ReportedDate: "19/9/2014", Status: "Repairing", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" }
                ]
            }

            var unit2 = {
                PurchaseUnitID: "2",
                PhaseName: "Kana Residence",
                UnitTypeCode: "B-10-20",
                 Defect:
                [
                    { DefectID: "3", Subject: "Flooring Repair", ReportedDate: "1/2/2014", Status: "Done", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" },
                    { DefectID: "4", Subject: "Roof-Top Repair", ReportedDate: "1/7/2014", Status: "Repairing", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" },
                     { DefectID: "5", Subject: "Roof-Top Repair", ReportedDate: "21/7/2014", Status: "Repairing", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" }
                ]
            }

            var unit3 = {
                PurchaseUnitID: "3",
                PhaseName: "Skypark Condo",
                UnitTypeCode: "A-3-1",
                 Defect:
                [
                    { DefectID: "7", Subject: "Flooring Repair", ReportedDate: "1/1/2014", Status: "Done", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" }
                ]
            }

            var unit4 = {
                PurchaseUnitID: "4",
                PhaseName: "East Lake Condo",
                UnitTypeCode: "B-11-1",
                 Defect:
                [
                    { DefectID: "8", Subject: "Flooring Repair", ReportedDate: "1/1/2014", Status: "Done", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" },
                    { DefectID: "9", Subject: "Roof-Top Repair", ReportedDate: "1/2/2014", Status: "Repairing", DefectType: "Tiles and Floor", Description: "Water Leaking near the loyer", DefectFileName: "images/image.png" }
                ]
            }

            puchaseUnit.push(unit1);
            puchaseUnit.push(unit2);
            puchaseUnit.push(unit3);
            puchaseUnit.push(unit4);

            return puchaseUnit;
        }

    }
} 