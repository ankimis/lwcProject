trigger countoopforaccount on Opportunity (after insert,after delete,after update) {
    set<Id> setId = new set<Id>();
    for(Opportunity opp:trigger.new){
        setId.add(opp.AccountId);        
        if(trigger.isUpdate){
            Opportunity oldrec=(Opportunity)trigger.oldMap.get(opp.Id);
            if(oldrec.AccountId !=opp.Id){
             setId.add(oldrec.AccountId );    
            }
        }
    }
    if(trigger.isdelete){
        for(Opportunity oppdel:trigger.old){
            setId.add(oppdel.AccountId);
        } }
        
        
    
    list<Account> aacrec =[select Id,Name,countOpp__c,( select Id,Name from Opportunities) from Account where Id IN:setId];
    
    For(Account rec:aacrec){
        List<Opportunity> opprecord= rec.Opportunities;
        rec.countOpp__c=opprecord.size();
    }
    update aacrec;
    
}