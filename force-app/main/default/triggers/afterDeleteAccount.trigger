trigger afterDeleteAccount on Account (after delete) {
    set<Id> accId= new set<Id>();
    List<Contact> conList =new List<Contact>();
    List<Case> casList =new List<Case>();
    for(Account acc:trigger.old){
        accId.add(acc.Id);
        List<Contact> conList=[select AccountId,FirstName,LastName,Email From Contact where AccountId IN :accId];
        for(Contact con:conList){
            con.AccountId=acc.Id;
            conList.add(con);
        }
    }
    Database.deleteResult[] conErr = Database.delete(conList, false);
        for(Database.DeleteResult err:conErr){
            if(err.isSuccess()){
                system.debug('successfully Deleted record by account after update');
            }else{
                  for(Database.Error err1:err.getErrors())
                        {
                            system.debug('failed  Deleted account.acoount.Id'); 
                            system.debug(err1.getStatusCode()+''+err1.getMessage());
                            system.debug('Account Failed Fields This Error'+err1.getFields());
                        }
            }
            
        }
  
}