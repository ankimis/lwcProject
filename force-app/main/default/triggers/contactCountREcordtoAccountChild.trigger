trigger contactCountREcordtoAccountChild on Contact (before insert, before update) {
    set<Id> accMap =new set<Id>();
    for(Contact con:trigger.new){
        accMap.add(con.AccountId);
    }
    if(!accMap.isEmpty()){
        decimal record;
     AggregateResult[] arList =[select Count(Id) from Contact where AccountID IN:accMap];
        if(!arList.isEmpty()){
            //integer record =conList.count();
            system.debug('record'+arList.size());
            if(arList.size()>1){
                for(Contact con:trigger.new){
                con.addError('you are not create second record');
    }
                
            }
        }
        
    }

}