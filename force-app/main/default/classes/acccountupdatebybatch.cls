global class acccountupdatebybatch implements Database.Batchable<sObject> {
    
    global  Database.QueryLocator start(Database.BatchableContext BC){
        
        string queryqq ='Select Id ,Name from Account';
        return Database.getQueryLocator(queryqq);      
    }
    global void execute (Database.BatchableContext Bc, List<Account> scope){
        List<Account> listaccount = new List<Account>();
        for(Account sco: scope)
        {
            sco.Name = 'update by 10 only ';
            listaccount.add(sco);
        }
        if(listaccount.size()>0){
        update listaccount;
        }
        
    }
    global void finish(Database.BatchableContext Bc){
        
    }

}