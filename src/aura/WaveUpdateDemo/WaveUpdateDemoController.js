({
    applyFilter: function(component, event, helper) {
        var accountSwitch = component.find("accountSwitch").get("v.checked");
        var accountName = null;
        if (accountSwitch) {
            var accountRec = component.get("v.accountRecord");
            accountName = accountRec.Name;
        } else {
            accountName = null;
        }
        //debugger;
        var filter = {
            datasets: {
                "DTC_Opportunity_SAMPLE": [{

                        fields: [
                            "Account_Name"
                        ],
                        filter: {
                            operator: "in",
                            values: [
                                accountName
                            ]
                        }
                    }

                ]
            }
        };
        var filterJSON = JSON.stringify(filter);
        //debugger;
        var dashboardId = '0FK1I000000PPpUWAW';
        console.log(filterJSON);
        //debugger;
        var evt = $A.get('e.wave:update');
        evt.setParams({
            id: dashboardId,
            value: filterJSON,
            type: "dashboard"
        });
        evt.fire();
        //debugger;
    }
})