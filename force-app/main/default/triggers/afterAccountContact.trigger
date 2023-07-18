trigger afterAccountContact on Contract (before insert) {
    set<Id> setid =new set<Id>();
    for(Contract con:trigger.new){
        setid.add(con.AccountId);
    }
    
    list<Contract> conList = [select Id,Name from Contract where AccountId IN:setid];
    system.debug('record'+conList.size());
    if(conList.size()>1){        
          trigger.new[0].addError('A contract already exists');
        
    }
    
    
    
    
    
    
    
}