public class AccountbatchUpdate implements Database.Batchable<sObject> {
    
    Public Database.QueryLocator start(Database.BatchableContext bc){
        string query = 'Select Id, Name From Account';
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext BC,List<Account> accRec){
        for(Account rec:accRec){
            rec.Name = rec.Name+' Current Update';
        }
        Update accRec; 
    }
    public void Finish(Database.BatchableContext BC){        
    }

}