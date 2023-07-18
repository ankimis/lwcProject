trigger PopulateContact on Contact (before insert) {
    set<id> setId =new set<id>();
    for(Contact con:trigger.new){
        if(con.AccountId !=null){
            setId.add(con.AccountId);
        }
    }   
    if(setId.size()>0){
      Map<Id, Account> mapAccount=new Map<Id, Account>([select Id,Type,name from Account where Id IN:setId]);
        for(Contact conrec:trigger.new){
           conrec.Type_c__c=mapAccount.get(conrec.AccountId).Type;
            
        }
    }


}