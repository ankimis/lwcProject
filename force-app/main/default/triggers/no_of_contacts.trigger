trigger no_of_contacts on Contact (after insert) {
    set<Id> setId =new set<Id>();
    if(trigger.isAfter){
        for(Contact con :trigger.new){
            setId.add(con.Id);
        }
    }
   
  List<Account> accrec= [select Id ,Name, (select AccountId,Name from Contacts) from Account where Id IN: setId];
    if(accrec.size()>0)
    {
        List<Account> updatet = new List<Account>();
        for(Account rec:accrec)
        {
            list<Contact>s = rec.Contacts;
                double recs =s.size();
               rec.No_of_contact__c=recs;
                updatet.add(rec);
                Database.SaveResult [] ass=database.update(updatet);
            
            for(Database.SaveResult ast:ass)
                {
                    if(ast.isSuccess())
                            {
                              system.debug('updated');
                            }else
                                    {
                                        for(Database.Error err:ast.getErrors())
                                            {
                                            system.debug('status'+err.getStatusCode());
                                            system.debug('status'+err.getMessage());
                                            }
                                    }
                  }
        }
    }

}