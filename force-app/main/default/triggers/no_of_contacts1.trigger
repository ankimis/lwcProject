trigger no_of_contacts1 on Account (after insert) {
    List<Contact> listContacts = new list<Contact>();
    map<id,decimal> mapAcc =new  map<id,decimal>();
    for(Account acc:trigger.new){
        mapAcc.put(acc.id,acc.Number_of_contacts__c);
        
    }
    if(mapAcc.size()>0 && mapAcc != null){
        for(Id accID:mapAcc.keyset()){
            for( integer i=0; i>mapAcc.get(accID); i++){
                 Contact  con =new Contact();
                con.AccountId =accId;
                con.LastName ='contact'+i;
                listContacts.add(con);
            }
        }
    }
    if(listContacts != null && listContacts.size()>0){
        insert listContacts;
    }
    
}