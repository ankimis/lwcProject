trigger AccountBillingchangeUpdateContactMailAddress on Account (after update) {
 map<Id,string> setId = new  map<Id,string>();
    for(Account acc:trigger.new){
        System.debug('The email was sent wr.'+acc.Id);
       if(acc.BillingCity != Trigger.oldMap.get(acc.id).BillingCity){
           setId.put(acc.Id,acc.BillingCity);
           System.debug('The email was sent wr.'+acc.Id);
        }
    }
    List<Contact> conrecord =[select LastName,AccountId,MailingCity from Contact where AccountId IN:setId.keyset()];
    System.debug('The email was sent wr.'+conrecord);
    for(Contact conrec:conrecord){
         List<Contact> conList =new List<Contact>();
           for(Id mapID : setId.keySet()){
           system.debug('igb'+setId.get(mapID));
            conrec.AccountId=mapID;
            conrec.LastName = 'jgvj';
            conrec.MailingCity ='uguygu';
            conList.add(conrec); 
        }
         system.debug('igb'+conList);
          Update conList;
    }
   }