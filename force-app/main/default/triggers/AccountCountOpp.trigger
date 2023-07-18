trigger AccountCountOpp on Opportunity (before insert, before update) {
 	list<Opportunity> oppList =new list<Opportunity>();
    set<Id> setId =new set<Id>();
    for(Opportunity opp:trigger.new){
        setId.add(opp.AccountId);
    }
    list<Account> accList =new list<Account>();
    AggregateResult oppList1 = [select Sum(Amount)Ammount__c from Opportunity where AccountId IN:setId];
    Double amt = (Double)oppList1.get('Ammount__c');
    system.debug('account'+amt);
    List<Account> accrec=[select Id,countOpp__c from Account where Id IN:setId];
    for(Account acc:accrec){
        acc.countOpp__c=amt;
        accList.add(acc);
    }
    if(accList.size()>0){
         system.debug('account'+accList);
        update accList;
    }
    
    
}