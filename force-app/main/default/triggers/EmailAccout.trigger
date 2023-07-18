trigger EmailAccout on Account (after update) {
    
    set<id> accId = new set<id>();
    for(Account acc:trigger.new){
        if(trigger.isUpdate){
            if(acc.Type != trigger.oldmap.get(acc.Id).Type){
                accId.add(acc.Id);
            }
        }
    list<Account> accList =[select Id,Name,Type from Account where Id IN :accId];
    for(Account accrec:accList){
        if(accrec.Type != acc.Type){
            
        }
        
    }

}
}