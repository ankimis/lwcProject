trigger countChildrecord on Contact (after update,after insert) {
    set<Id> ConId =new set<Id>();
    for(Contact con:trigger.new){
        ConId.add(con.AccountId);
        if(trigger.oldMap.get(con.Id).AccountId !=con.AccountId){
            ConId.add((trigger.oldMap.get(con.Id).AccountId));
            system.debug('rec '+con.AccountId);
        }
        
    }
    List<Account> accrec = [select Id,Name,No_of_contact__c,(Select AccountId ,LastName from Contacts) from Account where Id IN :ConId];
    iF( accrec.size()>0){
        system.debug('rec '+accrec.size());
    }
}