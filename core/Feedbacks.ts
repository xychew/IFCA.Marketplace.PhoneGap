module Marketplace {
    export class Feedbacks {

        GetFeedbackList() {

            var feedbackList = [];

            var feedback1 = {
                FeedbackID: "10013",
                PostedDate: "14/4/2014",
                FeedbackType: "Customer Service",
                Comment: "No One is picking up the hotline phone. Customer serivce should be improved."
            };

            var feedback2 = {
                FeedbackID: "10465",
                PostedDate: "10/9/2014",
                FeedbackType: "Billing",
                Comment: "Can't pay on the Public Bank E-backing"
            };

            var feedback3 = {
                FeedbackID: "10556",
                PostedDate: "19/10/2014",
                FeedbackType: "Progress",
                Comment: "No receive any progress notice."
            };

            var feedback4 = {
                FeedbackID: "10895",
                PostedDate: "10/1/2014",
                FeedbackType: "Customer",
                Comment: "Good Customer Service, can asnwer all my question. [Like]"
            };

            feedbackList.push(feedback1);
            feedbackList.push(feedback2);
            feedbackList.push(feedback3);
            feedbackList.push(feedback4);

            return feedbackList;
        }
    }
}