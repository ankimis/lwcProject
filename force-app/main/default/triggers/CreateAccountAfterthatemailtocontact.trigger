trigger CreateAccountAfterthatemailtocontact on Account (after insert,after Update) {
    set<Id> accId =new set<Id>();
    For(Account acc:trigger.new){
        accId.add(acc.Id);
        system.debug('contact record after accout create'+acc.Id);
    }
    List<Contact> contRecord =[select Id,Name ,Email from Contact where AccountId In : accId];
    system.debug('contact record after accout create');
    if(contRecord.size()>0){
        for(Contact con:contRecord){

        }
}
}