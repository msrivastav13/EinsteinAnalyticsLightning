public with sharing class WaveSelectionChangedDemoController {
	
    @AuraEnabled
    public static list<Opportunity> getOpportunities(String year,String month){
        integer year_int = integer.valueOf(year);
        integer month_int = integer.valueOf(month);
        return [Select Id, Name , CloseDate, StageName, Amount,Account.Name from opportunity where CALENDAR_MONTH(CloseDate) =:month_int and CALENDAR_YEAR(CloseDate) =:year_int];
    }
}