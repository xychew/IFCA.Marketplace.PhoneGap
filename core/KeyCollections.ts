module Marketplace {

    export class KeyCollections {

        GetKeyCollection() {

            var KeyCollectionList = [];

            var keyCollection1 = {
                keyCollectionID: "KY1",
                PhaseName: "Mama Condo",
                UnitTypeCode: "A-3-1",
                CollectionDate: "15/8/2014",
                IsBooked: "Book"
            };

            var keyCollection2 = {
                keyCollectionID: "KY2",
                PhaseName: "Kaka Condo",
                UnitTypeCode: "B-12-3",
                CollectionDate: "-",
                IsBooked: "No"
            };

            var keyCollection3 = {
                keyCollectionID: "KY3",
                PhaseName: "Wawa Condo",
                UnitTypeCode: "C-11-1",
                CollectionDate: "18/8/2014",
                IsBooked: "Book"
            };

            KeyCollectionList.push(keyCollection1);
            KeyCollectionList.push(keyCollection2);
            KeyCollectionList.push(keyCollection3);

            return KeyCollectionList;
        }

    }
} 