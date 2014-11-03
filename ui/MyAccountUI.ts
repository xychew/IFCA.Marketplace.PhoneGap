module Marketplace {
    export class MyAccountUI {
        items: any = [];

        AddItems(item: any) {
            this.items.push(item);
        }

        GenerateMyAccountListview() {
            var listString = "";

            $("#myAccountListView").html("");
            $.each(this.items, function (index, value) {
                listString += "<li id='" + value.StatementNo + "'><a href='#accountTranscation'>" + value.PhaseName + "(" + value.UnitTypeCode + ")<br />Balance: RM " + value.Balance + "<br />Due Date: " + value.DueDate + "</a></li>";
            });
            return listString;
        }

        DisplayAccountTransaction(id: any) {

            $.each(this.items, function (index, value) {

                if (id == value.StatementNo) {
                    $("#accountTransaction_Henders").html(value.PhaseName + "<br/>(" + value.UnitTypeCode + ")");
                    $("#transcationBody").html("");
                    $.each(value.Transaction, function (transactionIndex, transactionValue) {
                        $("#transcationBody").append("<tr><th>" + transactionValue.Date + "</th><td class='title'>" + transactionValue.Description + "</td><td>" + transactionValue.Amount + "</td></tr>");
                    });
                    return false;
                }
            });

        }
    }
}  

$(document).one('pagebeforecreate', '#myaccount', function () {

    var myAccount = new Marketplace.MyAccount();

    var myAcountList = myAccount.GetMyAccountList();

    var myAccountUI = new Marketplace.MyAccountUI();

    $.each(myAcountList, function (index, value) {
        myAccountUI.AddItems(value);
    });

    $("#myAccountListView").html(myAccountUI.GenerateMyAccountListview());

    $('#myAccountListView').delegate('li', 'tap', function () {
        myAccountUI.DisplayAccountTransaction($(this).attr('id'));
    });
});