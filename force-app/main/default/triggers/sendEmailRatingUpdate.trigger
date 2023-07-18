trigger sendEmailRatingUpdate on Account (after insert ) {
    set<Id> setId =new set<Id>();
    for(Account acc:trigger.new){
        if(acc.Rating != trigger.oldMap.get(acc.Id).Rating){
            setId.add(acc.Id);
        }
    }
    List<Contact> conlist  = new  List<Contact>();
    List<Opportunity> accRec =[select Id,Name from Opportunity where AccountId IN: setId];
     System.debug('The email was sent wr.'+accRec);

}