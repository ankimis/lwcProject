trigger AccountDonotcretesamenameme on Account (before insert ,before update,before delete){
map<string, Account> Name =  new map<string, Account>();
    for(Account acc:trigger.new){
    if(trigger.isInsert){
       	Name.put(acc.Name,acc);
    }
        if(trigger.isUpdate){
            if(trigger.oldmap.get(acc.Id).Name != acc.Name){
              Name.put(acc.Name,acc);  
            }
        }
    }
    if(trigger.isDelete){
        for(Account acc:trigger.old){
            if(acc.name!=null){
                acc.addError('you are not delete this Account');
            }
        }        
    }
    string errorMessage ='';
    List<Account> accresord =[select Id,Name from Account where Name In:Name.keySet()];
    if(accresord.size()>0){
        for (Account accr:accresord){
            if(accr.Name!=null){
                if(Name.get(accr.Name) != null){
                    errorMessage = 'your this name is already exist';
                }
                if(errorMessage!=''){
                    trigger.new[0].addError('your'+errorMessage);
                }
            } 
        }
    }
}