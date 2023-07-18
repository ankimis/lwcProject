trigger ContactAcc on Contact (before insert) {
   set<Id> conList = new  set<Id>();
    for(Contact con:trigger.new){
                 conList.add(con.AccountId);
          system.debug('conrec record'+con.AccountId);
     }
    list<Contact> conL=[select Id,LastName from Contact where AccountId IN:conList];
       system.debug('conrec record'+conL);
    if(conL.size()>1){
       system.debug('conrec record'+conL.size()); 
        for(Contact con:trigger.new){
                 con.addError('not create recorcod above the 2 record');
     }
    } 
}