trigger AccountCountOppEmail on Account (before insert) {
    
        list<Account> oppList =new list<Account>();
        set<Id> setId =new set<Id>();
        for(Account opp:trigger.new){
            setId.add(opp.Id);
        }
   AggregateResult oppList1 = [select Sum(Amount)Ammount__c from Opportunity where AccountId IN:setId];
    system.debug('account'+oppList1);
    
    

}