trigger MutiSelectPickList on Opportunity (after update) {
    set<Id> setId = new set<Id>();
    Map<Id,string> MapValue =new Map<Id,string>();
    for(Opportunity oop:trigger.new){
        if(oop.ABCDF__c != trigger.oldMap.get(oop.Id).ABCDF__c){
         MapValue.put(oop.AccountId,oop.ABCDF__c);
		 setId.add(oop.AccountId);        
        }
    }    	
    List<Account> accListRec = new List<Account>();
    List<Account> accrec =[select Id,ABCDF__c from Account where Id IN: setId];
    if(accrec.size()>0){
        for( Account rec: accrec){
            if(MapValue.containsKey(rec.Id)){
               // String c=countryMap.get(a.Id);  
                rec.ABCDF__c =MapValue.get(rec.Id);
                accListRec.add(rec);
            }            
        }
         system.debug('yjguy'+accListRec);
        if(accListRec != null){
            system.debug('yjguy'+accListRec);
            update accListRec;
      }
    }
}