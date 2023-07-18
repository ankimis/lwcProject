trigger afterInsertAccountCreateA on Account (after insert) {
  
    	List<Account> accList =new List<Account>();
    	List<Contact> conList = new List<Contact>();
    for (Account acc :trigger.new){
        Contact con = new Contact();
        con.AccountId =acc.Id;
        con.FirstName='ddddddddddd';
        con.LastName='sanjay';
        conList.add(con);
        
    }
    Database.SaveResult[] conErr=Database.insert(conList,false);
    for(Database.SaveResult sr:conErr)
        {
            if(sr.isSuccess()){
                system.debug('successfullly inserted Account account.acoount.Id'+sr.getId());
            }else{
                    for(Database.Error err:sr.getErrors())
                        {
                            system.debug('failed inserted Account account.acoount.Id'); 
                            system.debug(err.getStatusCode()+''+err.getMessage());
                            system.debug('Account Failed Fields This Error'+err.getFields());
                        }
                }
   }
    
 }