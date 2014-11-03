module Marketplace {

    export class KeyCollectionsUI {
        items: any = [];

        AddItems(item: any) {
            this.items.push(item);
        }

        GenerateKeyCollectionList() {
            var listString = "";

            $.each(this.items, function (index, value) {
                if (value.IsBooked == "Book")
                    listString += "<li id='" + value.keyCollectionID + "'><a href = '#keyCollectionSelectDate'>" + value.PhaseName + " (" + value.UnitTypeCode + ")</a><span class='ui-li-count' ><img style='width:1.5em' src = 'images/key.png'/></span></li>";
                else
                    listString += "<li id='" + value.keyCollectionID + "'><a href = '#keyCollectionSelectDate'>" + value.PhaseName + " (" + value.UnitTypeCode + ")</a><span class='ui-li-count' ></span></li>";
            });
            return listString;
        }

        DisplayKeyCollectionSelectDate(id: any) {
            $.each(this.items, function (index, value) {
                if (id == value.keyCollectionID) {
                    $("#keyCollectionSelectDate_Headers").html(value.PhaseName + "<br/>(" + value.UnitTypeCode + ")");
                }
            });
        }

    }
} 

$(document).one('pagebeforecreate', '#keyCollections', function () {

    var KeyCollections = new Marketplace.KeyCollections();

    var KeyCollectionsList = KeyCollections.GetKeyCollection();

    var KeyCollectionsUI = new Marketplace.KeyCollectionsUI();

    $.each(KeyCollectionsList, function (index, value) {
        KeyCollectionsUI.AddItems(value);
    });

    $("#keyCollectionListView").html(KeyCollectionsUI.GenerateKeyCollectionList());

    $('#keyCollectionListView').delegate('li', 'tap', function () {
        KeyCollectionsUI.DisplayKeyCollectionSelectDate($(this).attr('id'));
    });

});