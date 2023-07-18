trigger afterUpdateAccountCreateA on Account (after update) {
    set<Id> accId=new set<Id>();
    List<Contact> conList= new List<Contact>();
    for(Account acc:trigger.new){
       accId.add(acc.Id); 
        List<contact> conListREcord =[select AccountId,FirstName,LastName,Email from Contact where AccountId in: accId];
        for(Contact ccc:conListREcord){
        if(acc.Id == ccc.AccountId){
            ccc.FirstName='to much';
            ccc.LastName ='this after updated by ankit';
            conList.add(ccc);
            
        }
        }
        Database.SaveResult[] conErr =Database.update(conList,false);
        for(Database.SaveResult err:conErr){
            if(err.isSuccess()){
                system.debug('successfully udated record by account after update');
            }else{
                  for(Database.Error err1:err.getErrors())
                        {
                            system.debug('failed inserted Account account.acoount.Id'); 
                            system.debug(err1.getStatusCode()+''+err1.getMessage());
                            system.debug('Account Failed Fields This Error'+err1.getFields());
                        }
            }
            
        }
        
    }    
    

}