global class batchClass  implements  Database.Batchable<sObject>{
    global Database.QueryLocator  start (Database.BatchableContext BC){
        string  query ='SELECT Id, Name From Account';
        return Database.getQueryLocator(query);
    }
     global void execute (Database.BatchableContext BC,List<Account> accrec){
        for( Account acc:accrec){
            acc.Name = acc.Name+'batch1';
        }
        update accrec;
    }
    global void finish (Database.BatchableContext Bc){
        
    }
}