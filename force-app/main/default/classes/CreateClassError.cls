public class CreateClassError {

    public static void accInsert(List<Account> newList){
    
         List<Account> accError = new List<Account>();
        for(Account acc :  newList){
            acc.Phone='222222';
            accError.add(acc);
        }
 
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

}