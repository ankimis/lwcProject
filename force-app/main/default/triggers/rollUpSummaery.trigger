trigger rollUpSummaery on Contact (after insert,after delete,after update) {
List<Contact> conList =new List<Contact>();
    Set<Id> conId= new Set<Id>();
    if(trigger.isDelete){
       conList =trigger.old;
    }else{
               conList =trigger.new;
    }
    for( Contact con :conList){
        if(con.AccountId != null){
            conId.add(con.AccountId);
        }
        if(trigger.isUpdate){
            Contact oldContact = (Contact)trigger.oldMap.get(con.Id);
                if(oldContact.AccountId != con.Id){
                    conId.add(oldContact.AccountId);
            }
        }
    }
    if(conList!= null){
    List<Account> accList =[select Id,Name,No_of_contact__c,(select Id,Name from Contacts) 
                            from Account where Id IN : conId];  
        for(Account acc:accList){
            List<Contact> conList2= acc.Contacts;
            if(conList2 != null){
                acc.No_of_contact__c =conList2.size();
            }else{
                acc.No_of_contact__c = 0;
            }
            }
        update accList;
        }
    }