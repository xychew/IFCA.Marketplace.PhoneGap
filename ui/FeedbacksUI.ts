module Marketplace {
    export class FeedbacksUI {
        items: any = [];

        AddItems(item: any) {
            this.items.push(item);
        }

        GenerateFeedbacksListView() {
            var listString = "";

            $.each(this.items, function (index, value) {
                listString += "<li id='" + value.FeedbackID + "'><a href='#viewFeedbacks'>Feedbacks No: " + value.FeedbackID + "<br />Date: " + value.PostedDate + "<br />Feedback on: " + value.FeedbackType + "</a></li>";
            });
            return listString;
        }

        DisplayViewFeedbacks(id: any) {
            $.each(this.items, function (index, value) {
                if (id == value.FeedbackID) {

                    $("#viewFeedbacksHeaders").html("Feedback No: <br/>" + value.FeedbackID);

                    $("#lblDate").html(value.PostedDate);

                    $("#lblFeedbacksType").html(value.FeedbackType);

                    $("#lblFeedbacks").html(value.Comment);

                    return false;
                }
            });
        }

    }
}

$(document).one('pagebeforecreate', '#feedbacks', function () {

    var Feedbacks = new Marketplace.Feedbacks();

    var FeedbacksLists = Feedbacks.GetFeedbackList();

    var FeedbacksUI = new Marketplace.FeedbacksUI();

    $.each(FeedbacksLists, function (index, value) {
        FeedbacksUI.AddItems(value);
    });

    $("#feedbacksListView").html(FeedbacksUI.GenerateFeedbacksListView());

    $('#feedbacksListView').delegate('li', 'tap', function () {
        FeedbacksUI.DisplayViewFeedbacks($(this).attr('id'));
    });

});