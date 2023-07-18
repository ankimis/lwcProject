global class globalbatch implements Database.Batchable<sObject>, Database.stateful{
    public integer Listrecord =0;
    global Database.QueryLocator start(Database.BatchableContext Bc){
 		string query ='SELECT ID,Name from Account';   
        return Database.getQueryLocator(query);
    }
      
    global void execute(Database.BatchableContext Bc,List<Account>accRec){
        
        for(Account accrc:accrec){
            accrc.Active__c ='Yes';
            Listrecord =Listrecord+accRec.size();
        }
        update accRec; 
    }
      
    global void finish(Database.BatchableContext Bc){
        system.debug('total record'+Listrecord);
        
    }
}