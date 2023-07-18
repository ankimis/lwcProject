global class oppBatchClass implements Database.Batchable<sObject>{
    
   global Database.QueryLocator start(Database.BatchableContext Bc){
        
        string query ='Select Id Name from 	Opportunity';
        return Database.getQueryLocator(query);
    }
    global void execute (Database.BatchableContext BC,List<Opportunity>scope)
    {
        for(Opportunity opp:scope){
            opp.Name=opp.Name+'update by batch';
        }
        update scope;
    }
    global void finish (Database.BatchableContext BC){

    }
}