module Marketplace {

    export class MilestonesUI {
        items: any = [];

        AddItems(item: any) {
            this.items.push(item);
        }

        GenerateMilestones() {
            var listString = "";

            $.each(this.items, function (index, value) {
                listString += "<li id='" + value.milestonesID + "'><a href = '#milestonesStep'>" + value.PhaseName + " (" + value.UnitTypeCode + ")<br/><form class='full-width-slider'><label for='slider-12' class='ui-hidden-accessible'>Slider:</label><input type='range' name='slider-12' id='slider-12' min='0' max='100' value='" + value.CompletionLevel + "' data-show-value='true' disabled='disabled' data-highlight='true'></form></a></li>";
            });
            return listString;
        }


        DisplayMilestonesStep(id: any) {
            $.each(this.items, function (index, value) {
                if (id == value.milestonesID) {
                    $("#milestonesStepHeaders").html(value.PhaseName + "<br/>(" + value.UnitTypeCode + ")");
                    $("#milestonesStep_view").html("");
                    $.each(value.Step, function (stepIndex, stepValue) {
                        var stepNumber = stepIndex + 1;

                        if (stepIndex != 0)
                            $("#milestonesStep_view").append("<div class='arrowImage'><img style='width:5em;' src='images/arrow.png'></div>");

                        $("#milestonesStep_view").append("<div class='ui-corner-all custom-corners'><div class='ui-bar ui-bar-a'><h3>Step " + stepNumber + "</h3></div><div class='ui-body ui-body-a'><h2>" + stepValue.Title + "</h2><p>Date: " + stepValue.Date + "</p><p>Status: " + stepValue.Status + " </p></div></div>");

                    });
                    //$("#milestonesStep_view").listview('refresh');
                    return false;
                }
            });
        }

    }
} 

$(document).one('pagebeforecreate', '#milestones', function () {

    var Milestones = new Marketplace.Milestones();

    var MilestonesList = Milestones.GetMilestonesList();

    var MilestonesUI = new Marketplace.MilestonesUI();

    $.each(MilestonesList, function (index, value) {
        MilestonesUI.AddItems(value);
    });

    $("#milestonesListView").html(MilestonesUI.GenerateMilestones());

    $('#milestonesListView').delegate('li', 'tap', function () {
        MilestonesUI.DisplayMilestonesStep($(this).attr('id'));
    });

});