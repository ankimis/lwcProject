trigger afterAccountContactpopulatesales on Account (before insert ,before update) {
    list<Account> Acclist = new list<Account>();
    set<Id> setId =new set<Id>();
       if( trigger.isupdate){
    for(Account acc:trigger.new){
     
            setId.add(acc.OwnerId);
                  system.debug('id'+acc.OwnerId);
           // Acclist.add(acc);
            
        }
    }
    Map<Id, user>  usermap =  new Map<Id, user>([select Id, Name from user where Id IN:setId]); 
  
     for(Account acc:trigger.new){
        // user.get(acc.ownerId);
           user usr = usermap.get(acc.ownerId);
         system.debug('id'+usr);
         acc.Sales_Rep__c=usr.Name;
         Acclist.add(acc);
     }
    update accList;
    
    
    
   // Database.SaveResult [] saveresult= Database.insert(Acclist,false);
    
    
    

}