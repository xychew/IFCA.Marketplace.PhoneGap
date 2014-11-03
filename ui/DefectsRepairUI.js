var Marketplace;
(function (Marketplace) {
    var DefectsRepairUI = (function () {
        function DefectsRepairUI() {
            this.items = [];
        }
        DefectsRepairUI.prototype.AddItems = function (item) {
            this.items.push(item);
        };

        DefectsRepairUI.prototype.GenerateDefectRepairListview = function (event) {
            var listString = "";

            $.each(this.items, function (index, value) {
                listString += event.DisplayDefectPurchaseListView(value);
            });

            return listString;
        };

        DefectsRepairUI.prototype.DisplayDefectPurchaseListView = function (value) {
            return " <li id=" + value.PurchaseUnitID + "><a href='#defectRepair_PurchaseUnit'>" + value.PhaseName + " (" + value.UnitTypeCode + ") </a></li>";
        };

        DefectsRepairUI.prototype.DisplayDefectListByPurchaseID = function (id) {
            var listString = "";

            $.each(this.items, function (index, value) {
                if (value.PurchaseUnitID == id) {
                    $("#defectRepair_PurchaseUnit_Headers").html(value.PhaseName + "<br/>(" + value.UnitTypeCode + ")");
                    $.each(value.Defect, function (DefectIndex, DefectValue) {
                        listString += " <li id=" + DefectValue.DefectID + "><a href='defects.html#viewDefect'>" + DefectValue.Subject + "<br/>Report: " + DefectValue.ReportedDate + "<br/>Status:" + DefectValue.Status + " </a></li>";
                    });
                    return false;
                }
            });

            return listString;
        };

        DefectsRepairUI.prototype.DisplayDefectDetail = function (id) {
            $.each(this.items, function (index, value) {
                $.each(value.Defect, function (DefectIndex, DefectValue) {
                    if (DefectValue.DefectID == id) {
                        $("#viewDefectRepair_Headers").html(DefectValue.Subject + "<br/>(" + DefectValue.ReportedDate + ")");

                        $("#lblProjectName").html(value.PhaseName);

                        $("#lblUnitNumber").html(value.UnitTypeCode);

                        $("#lblDefectType").html(DefectValue.DefectType);

                        $("#lblDescription").html(DefectValue.Description);

                        $("#lblStatus").html(DefectValue.Status);

                        $("#imgPicture").attr("src", DefectValue.DefectFileName);
                    }
                });
            });
        };
        return DefectsRepairUI;
    })();
    Marketplace.DefectsRepairUI = DefectsRepairUI;
})(Marketplace || (Marketplace = {}));

$(document).one('pagebeforecreate', '#defectRepair', function () {
    var DefectPurchase = new Marketplace.DefectsRepair();

    var DefectPurchaseUnitsLists = DefectPurchase.GetDefect_PuchaseUnit();

    var DefectPurchaseUI = new Marketplace.DefectsRepairUI();

    $.each(DefectPurchaseUnitsLists, function (index, value) {
        DefectPurchaseUI.AddItems(value);
    });

    $("#defectPurchase_ListView").html(DefectPurchaseUI.GenerateDefectRepairListview(DefectPurchaseUI));

    $('#defectPurchase_ListView').delegate('li', 'tap', function () {
        $("#defect_ListView").html(DefectPurchaseUI.DisplayDefectListByPurchaseID($(this).attr('id')));
        $("#defect_ListView").listview("refresh");
    });

    $('#defect_ListView').delegate('li', 'tap', function () {
        DefectPurchaseUI.DisplayDefectDetail($(this).attr('id'));
    });
});

$(document).on('pageinit', '#defectRepair', function () {
    var newDefect = document.getElementById('newDefect_Click');
    window.onload = function () {
        newDefect.onclick = newDefect_Function;
        function newDefect_Function() {
            var getHeaders = $("#defectRepair_PurchaseUnit_Headers").text();
            var splitstring = getHeaders.split("(");
            var projectName = splitstring[0];
            splitstring = splitstring[1].split(")");
            var unitNumber = splitstring[0];

            $("#lblNewProjectName").html(projectName);
            $("#lblNewUnitNumber").html(unitNumber);
        }
    };
});
//# sourceMappingURL=DefectsRepairUI.js.map
