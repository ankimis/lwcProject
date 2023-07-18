trigger afterupdateAccToOpp on Opportunity (after insert,after update,after delete) {
    map<id,Opportunity> oppMap = new   map<id,Opportunity>(); 
    set<id> oppId =new set<id>();
    for(Opportunity opp:trigger.new){
        oppId.add(opp.AccountId);
    }
    if(trigger.isDelete){
        for(Opportunity oppD:trigger.old){
          oppId.add(oppD.AccountId);
            system.debug('id oppo==>'+oppD.AccountId);
        }
    }
   // list<Account> accList =[select id,Name,(select AccountId from Opportunity)from Account where id in:oppId];
     List<Account> accList =[select Id,Name,countOpp__c,(select AccountId,Name from Opportunities)
                            from Account where Id IN : oppId];  
    if(!accList.isEmpty()){
        for(Account acc:Acclist){
            list<Opportunity> opplist =acc.Opportunities;
            if(!opplist.isEmpty()){
                acc.countOpp__c =opplist.size();
            }
        }
    }
    update Acclist;

}