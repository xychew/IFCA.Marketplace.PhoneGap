/// <reference path="../model/address.ts" />
/// <reference path="../model/user.ts" />
/// <reference path="../config.ts" />
module Marketplace {

    export module Core {
              
        export class PersonalProfile {

            UserID: number;

            constructor(userid: number) {
                $.ajaxSetup({
                    async: false
                });


                this.UserID = userid;
            }


        
            SaveUserProfile(contactNo : string, email :string) {

                var user = {
                    MobileNumber: contactNo,
                    Email : email
                };
           
                $.ajax({
                    url: Marketplace.Config.MARKETPLACE_SERVER_API + '/odata/Marketplace_UT_User(' + this.UserID + ')',
                    data: JSON.stringify(user),
                    type: "PATCH",
                    contentType: "application/json"
                });
            }

            GetUser(): Marketplace.Model.User {

                    var user = new Marketplace.Model.User();

                    $.getJSON(Marketplace.Config.MARKETPLACE_SERVER_API + "/odata/Marketplace_UT_User("+ this.UserID + ")?$expand=Marketplace_UT_Address/Marketplace_CT_City", function (data) {
                        user._FullName = data.FullName;
                        user._Email = data.Email;
                        user._Address._StreetAddress = data.Marketplace_UT_Address.StreetAddress;
                        user._DateOfBirth = data.DateOfBirth;
                     
                        //add remaining... 
                    });

                    return user;

                }

            GetPersonalProfileDetail() {

                
                var personalDetail = {
                    Name: "Chole Yeoh",
                    IdentityType: "Identity Card",
                    IdentityNo: "880506-07-5330",
                    DateOfBirth: "06/05/1988",
                    Nationality: "Malaysia",
                    Race: "Chinese",
                    Gender: "Female",
                    BumiputeraStatus: "No",
                    Address: "8, Jalan Alor, Kedah",
                    Email: "Chole@gmail.com",
                    ContactNo: "60169978890",
                    MartialStatus: "Single",
                    Postcode: "10350",
                }
            return personalDetail;
            }
        }
    }
}