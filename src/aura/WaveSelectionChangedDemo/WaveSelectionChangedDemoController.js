({
    handleSelectionChanged: function(component, event, helper) {
        var params = event.getParams();
        var payload = params.payload;
        if (payload) {
            var step = payload.step;
            var dataArray = payload.data;
            console.log(step);
            if (dataArray) {
                var data = dataArray[0];
                if (step === 'CloseDate_Year_Close_5') {
                    if (data) {
                        var year_month = data['Close_Date_Year~~~Close_Date_Month'];
                        console.log(year_month);
                        var year_month_Array = year_month.split('~~~');
                        component.set("v.year", year_month_Array[0]);
                        component.set("v.month", year_month_Array[1]);
                        helper.getOpportunityList(component, event);
                    }
                }
            }
        }
    }
})