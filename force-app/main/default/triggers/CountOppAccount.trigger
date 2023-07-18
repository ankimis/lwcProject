trigger CountOppAccount on Opportunity (after insert, after update) {
    set<id> setId = new set<id>();
    for(Opportunity opp:trigger.new){
        setId.add(opp.AccountId);
    }
    List<Account> accListToUpdate = new List<Account>();
        AggregateResult result = [SELECT sum(Amount)amountOfOpp FROM Opportunity where Id =:setId ]; // result in form of aggregate
            Double amt = (Double)result.get('amountOfOpp');
    system.debug('amount==>'+amt);
   List<Account> accList = [select Id,Complete_Opportunity_Amount__c from Account where Id =:setId];
        if(accList.size()>0){
        for(Account a: accList){
        a.Complete_Opportunity_Amount__c=amt;
        accListToUpdate.add(a);
}
            update accListToUpdate;
        }
}