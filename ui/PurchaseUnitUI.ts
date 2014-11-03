module Marketplace {
    
    export class PurchaseUnitUI {

        //elementid: string;
 
 
        items: any = [];
    

        //constructor(elementid: string) {
        //    this.elementid = elementid;
        //}


       AddItem(item : any) {
            this.items.push(item);
        }


        GenerateListview(event){
            var listString = "";

            $.each(this.items, function (index, value) {
                listString += event.DisplayItemFormat(value);
            });

            return listString;
        }

        DisplayItemFormat(value: any) {
            var propertyDetails = value.PropertyDetails;
            return "<li id='" + value.PurchaseUnitID + "' ><a href = '#property' > " + propertyDetails.ProjectName + " (" + propertyDetails.UnitTypeCode + ")<br / > Property Type: " + propertyDetails.PropertyType + " <br /> Location: " + propertyDetails.Location +" </a></li>";
        }

        DisplayPropertyHeaders(id: any) {
            var index:number = this.GetPropertyDetailsIndex(id);
            var propertyDetails = this.items[index].PropertyDetails;
            $("#property_Headers").html(propertyDetails.ProjectName + "<br/>(" + propertyDetails.UnitTypeCode + ")");
        }

        GetPropertyDetailsIndex(id: any) : any{
            var selectedIndex = -1;
            $.each(this.items, function (index, value) {
                if (value.PurchaseUnitID == id) {
                    selectedIndex = index
                    return false;
                }
            });

            if (selectedIndex == -1)
                return -1;
            else
                return selectedIndex;
        }

        DisplayPropertyDetails(id: any) {

            var index: number = this.GetPropertyDetailsIndex(id);

            var propertyDetails = this.items[index].PropertyDetails;

            $("#lblCompanyName").html(propertyDetails.CompanyName);

            $("#lblProjectName").html(propertyDetails.ProjectName);

            $("#lblPhaseName").html(propertyDetails.PhaseName);

            $("#lblBlockName").html(propertyDetails.BlockName);

            $("#lblUnitNumber").html(propertyDetails.UnitTypeCode);

            $("#lblPropertyType").html(propertyDetails.PropertyType);

            $("#lblPropertyTenure").html(propertyDetails.PropertyTenure);

            $("#lblLocation").html(propertyDetails.Location);

            $("#lblUnitType").html(propertyDetails.UnitType);

            $("#lblLandArea").html(propertyDetails.LandArea);
        }

        DisplayPurchaseContracts(id: any) {

            var index: number = this.GetPropertyDetailsIndex(id);

            var purchaseContracts = this.items[index].PurchaseContracts;

            $("#lblMainBuyer").html(purchaseContracts.MainBuyerName);

            $("#lblJoinBuyer").html(purchaseContracts.JointBuyerName);

            $("#lblPurchasePrice").html(purchaseContracts.PurchasePrice);

            $("#lblHandoverDate").html(purchaseContracts.HandoverDate);

            $("#lblIdentityNo").html(purchaseContracts.IdentityNo);

            $("#lblSalePurchaseAgrementDate").html(purchaseContracts.SalesPurchaseAgreementDate);

            $("#lblVacantPossessionDate").html(purchaseContracts.VacantPossesionDate);

            $("#lblExtraDefectsLiabilityPeriod").html(purchaseContracts.ExtraDefectsLiabilityDate);

            $("#lblDefectsLiabilityPeriodDate").html(purchaseContracts.DefectsLiabilityPeriodDate);
        }

        DisplaySolicitor(id: any) {

            var selectedIndex: number = this.GetPropertyDetailsIndex(id);

            var solicitors = this.items[selectedIndex].Solicitor;
            $("#solicitorListView").html("");

            $.each(solicitors, function (index, value) {

                $("#solicitorListView").append(" <li class='ui-field-contain'><label for='lblReferenceNo'>Reference No.</label><label>" + value.ReferenceNo + "</label></li>");
                $("#solicitorListView").append(" <li class='ui-field-contain'><label for='lblSolicitorName'>Solicitor Name</label><label>" + value.Name + "</label></li>");
                $("#solicitorListView").append(" <li class='ui-field-contain'><label for='lblPhone'>Telephone No.</label><label>" + value.Phone + "</label></li>");
                $("#solicitorListView").append(" <li class='ui-field-contain'><label for='lblFaxNo'>Fax No.</label><label>" + value.FaxNo + "</label></li>");
                $("#solicitorListView").append(" <li class='ui-field-contain'><label for='lblEmail'>E-mail.</label><label>" + value.Email + "</label></li>");
                $("#solicitorListView").append(" <li data-role='list-divider'></li>");
            });

            $("#solicitorListView").listview("refresh");
        }

        DisplayFinancialInfo(id: any) {

            var selectedIndex: number = this.GetPropertyDetailsIndex(id);

            var financialInfo = this.items[selectedIndex].FinancialInfo;
            $("#financialInfoListView").html("");

            $.each(financialInfo, function (index, value) {

                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblBankName'>Bank Name</label><label>" + value.BankName + "</label></li>");
                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblBankAddress' >Bank Address</label><label style='white-space:normal'>" + value.BankAddress + "</label></li>");
                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblPersonInCharge'>Person In Charge</label><label>" + value.PersonInCharge + "</label></li>");
                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblPhone'>Telephone No.</label><label>" + value.BankPhone + "</label></li>");
                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblEmail'>E-mail.</label><label>" + value.BankEmail + "</label></li>");
                $("#financialInfoListView").append(" <li class='ui-field-contain'><label for='lblFaxNo'>Fax No.</label><label>" + value.BankFaxNo + "</label></li>");
                $("#financialInfoListView").append(" <li data-role='list-divider'></li>");
            });

            $("#financialInfoListView").listview("refresh");

        }

    }

}


$(document).one('pagebeforecreate', '#purchasedunits', function () {


    var PurchaseUnit = new Marketplace.PurchaseUnit();

    var PurchaseUnitList = PurchaseUnit.GetPurchaserUnits();

    var PurchaseUnitUI = new Marketplace.PurchaseUnitUI();

    var currentSelectProperty = "";

    $.each(PurchaseUnitList, function (index, value) {
        PurchaseUnitUI.AddItem(value);
    });

    $("#purchaseUnitListView").html(PurchaseUnitUI.GenerateListview(PurchaseUnitUI));

    $('#purchaseUnitListView').delegate('li', 'tap', function () {
        PurchaseUnitUI.DisplayPropertyHeaders($(this).attr('id'));
        currentSelectProperty = $(this).attr('id');
    });

    $('#propertyListView').delegate('li', 'tap', function () {

        if ($(this).attr('id') == "propertyDetail") {
            PurchaseUnitUI.DisplayPropertyDetails(currentSelectProperty);
        }
        else if ($(this).attr('id') == "purchaseContracts") {
            PurchaseUnitUI.DisplayPurchaseContracts(currentSelectProperty);
        }
        else if ($(this).attr('id') == "solicitor") {
            PurchaseUnitUI.DisplaySolicitor(currentSelectProperty);
        }
        else if ($(this).attr('id') == "financialInfo") {
            PurchaseUnitUI.DisplayFinancialInfo(currentSelectProperty);
        }
    });


});