trigger afterAccountContactpo1pulatesales on Contact (after insert ,after update) {
		set<id> setId = new set<Id>();
    List<Contact_Relationship__c> lis =new List<Contact_Relationship__c>();
    for(Contact con:trigger.new){
         
        if(con.Contact_Relationship__c  == true){
            Contact_Relationship__c cr= new Contact_Relationship__c();
            system.debug('record'+con.Id);
            cr.Contact_Id__c=con.Id;
            cr.Name__c=con.LastName;
             if(trigger.isUpdate){
                setId.add(con.Id);
                list<Contact_Relationship__c> record  =[select Id from Contact_Relationship__c where Contact_Id__c IN:setId];
                for(Contact_Relationship__c rec:record){
                    system.debug('record'+rec);
                    cr.Id=rec.Id;
                }
            }
          
            lis.add(cr);
        }
    }
    if(lis.size()>0){
        Update lis;
    }
    
    
    
}