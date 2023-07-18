trigger CustomerProject on Customer_Project__c (after insert,after update) {
List<Opportunity> opps=new List<Opportunity>();
    set<id> setid =new set<id>();
    for(Customer_Project__c cusrec:trigger.new){
        if(cusrec.Status__c == 'Yes'){
           setid.add(cusrec.OpportunityIds__c);
         list<Opportunity> opp= [ select Id from Opportunity where id IN: setid];
            for(Opportunity oppr:opp){
                oppr.Customer_project_field__c= True;
            		opps.add(oppr);
            }
            
        }
    }
  update opps;
 }