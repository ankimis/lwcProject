global class batchUpdte  implements  Database.Batchable<sObject>{
    global Database.QueryLocator start (Database.BatchableContext BC){
          String query = 'SELECT Id,  LastName FROM Contact';            
        return Database.getQueryLocator(query); 
    }
    global void execute (Database.BatchableContext BC, list<Contact> acd){
          System.debug('e'+acd);
              for(Contact acc:acd){
            acc.LeadSource='Phone Inquiry';
                  
	                   System.debug('e'+acc);
        }
            update acd;   
    }
    global void Finish(Database.BatchableContext BC){        
    }
}