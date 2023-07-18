public class BatchOppurtunity implements Database.Batchable<sObject> {
  
    public  integer recordcount = 0;
    public Database.QueryLocator start(Database.BatchableContext bc){
        return  Database.getQueryLocator([select Id,Name from Opportunity]);
    }
     public void  execute(Database.BatchableContext bc,List<Opportunity> opps){
         for(Opportunity oop : opps){
             oop.LeadSource ='Web';
         }
         update opps;
         recordcount =recordcount+opps.size();
    }
       public void  finish(Database.BatchableContext bc){
        system.debug('Record Proccessd'+recordcount);
    }
    
}