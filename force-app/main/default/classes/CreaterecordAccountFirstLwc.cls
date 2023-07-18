public class CreaterecordAccountFirstLwc {
    @AuraEnabled
    public static List<Account> createRecord(string accountName ,string accountIndustry){
        List<Account> accList =new List<Account>();
       Account acc= new Account();
            acc.Name=accountName;
            acc.Industry=accountIndustry;
            accList.add(acc);
        system.debug('record==>'+accList);
        if( !accList.isEmpty()){
            insert accList;
            return accList;
        }
         return null;
      
        
    }
	    @AuraEnabled
            public static list<Account> UpdateAccount(string Accountname ,string Accountindusrtry ,string AccountId){
        
        List<Account> accList =new List<Account>();
                if(AccountId!= null){
                    Account acc =new Account();
                    acc.Id =AccountId;
                    acc.Name =Accountname;
                    acc.Industry =Accountindusrtry;
                     accList.add(acc);
                    system.debug('record'+accList);
                    if(!accList.isEmpty())
                    {
                         system.debug('record====>'+accList);
                        update accList;
                        return accList;

                        
                    }                    
                }
                return null;
    }

}