
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jquerymobile/jquerymobile.d.ts" />

/// <reference path="../core/siteprogress.ts" />


module Marketplace {

    export class SiteProgressUI {
        items: any = [];

        AddItems(item: any) {
            this.items.push(item);
        }

        GenerateSiteProgressListView() {
            var listString = "";

            $.each(this.items, function (index, value) {
                listString += "<li id='" + value.SiteProgressID + "'><a href='#progressList'>" + value.PhaseName + " (" + value.UnitTypeCode + ")<br/><form class='full-width-slider'><label class='ui-hidden-accessible'>Slider:</label><input type='range' name='slider-12' id='slider-12' min='0' max='100' value='" + value.CompletionLevel + "' data-show-value= 'true' disabled='disabled' data-highlight='true'></form></a></li>";
            });
            return listString;
        }

        GenerateProgressListView(id:any) {
            var listString = "";

            $.each(this.items, function (index, value) {
                if (id == value.SiteProgressID) {

                    $.each(value.Progress, function (progressIndex, progressValue) {
                        listString += "<li id=><a href='#progressDetail'><img src='" + progressValue.ProgressPicture + "'><h2 style='white-space:normal' >" + progressValue.SiteProgressFileName + "</h2><p>" + progressValue.CertificationDate + "</p></a></li>";
                    });
                    return false;
                }
            });
            return listString;
        }
    }
} 

$(document).one('pagebeforecreate', '#siteProgress', function () {

    var SiteProgress = new Marketplace.SiteProgress();

    var SiteProgressList = SiteProgress.GetSiteProgressList();

    var SiteProgressUI = new Marketplace.SiteProgressUI();

    $.each(SiteProgressList, function (index, value) {
        SiteProgressUI.AddItems(value);
    });

    $("#siteProgressListView").html(SiteProgressUI.GenerateSiteProgressListView());

    $('#siteProgressListView').delegate('li', 'tap', function () {
        $("#progressListView").html(SiteProgressUI.GenerateProgressListView($(this).attr('id')));
        $("#progressListView").listview("refresh");
    });

    $('#siteProgressListView').delegate('li', 'tap', function () {
        $("#progressListView").html(SiteProgressUI.GenerateProgressListView($(this).attr('id')));
        $("#progressListView").listview("refresh");
    });
});