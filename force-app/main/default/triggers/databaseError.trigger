trigger databaseError on Account (before insert) 
{
    List<Account> accError = new List<Account>
  {
       new Account(Name='amit tarnsfer',Phone = '1234567890') ,
       new Account(Name='ankit tarnsfer',Phone = '6395499873') ,
       new Account()};
       Database.SaveResult[] srList =Database.insert(accError,false);
        for(Database.SaveResult sr:srList)
        {
            if(sr.isSuccess()){
                system.debug('siccessfullly inserted Account account.acoount.Id'+sr.getId());
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