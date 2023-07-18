global class accountbatch  implements Database.Batchable<sObject> {
     
    global Database.QueryLocator start (Database.BatchableContext BC ){
      String query = 'SELECT Id,Name FROM Account';
          system.debug('accList0'+query);
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext BC, List<Account> scope){
       // List<Account> accList=new List<Account>();
        for(Account acc:scope){
            system.debug('accList0'+acc);
            //acc.Name =acc.Name+'Update dahi handi';
            acc.Active__c ='	Yes';
           // accList.add(acc);
        }
        //if(accList.size()>0){
            //system.debug('accList0'+accList);
            update scope;
       // }
        
    }
    global void finish(Database.BatchableContext BC){
        
    }
    

}