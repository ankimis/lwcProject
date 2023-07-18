trigger mail on Account (after Update) {
    set<Id> acccId =new set<Id>();
    For(Account acc:trigger.new){
        acccId.add(acc.Id);
        system.debug('contact record after accout create'+acc.Id);
    }
    List<Contact> contRecord =[select Id,LastName ,Email from Contact where AccountId In : acccId];
    system.debug('contact record after accout create');
    List<Messaging.SingleEmailMessage> emailList= new List<Messaging.SingleEmailMessage>();
    
    if(contRecord.size()>0){
        for(Contact con:contRecord){
     Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setBccSender(false);
            mail.setSaveAsActivity(false);
            mail.setTargetObjectId(con.Id);
            mail.setSenderDisplayName('System Administrator');
            mail.setUseSignature(false);
            mail.setSubject(' Account Update Info.');
            string body ='Dear'+con.LastName+'</br>';
            body+='Your account information has been updated successfully.<br/><br/>';
            mail.setHtmlBody(body); 
            mail.toAddresses = new String[]{con.Email};
            emailList.add(mail);
        }
        if(emailList.size()>0){
            Messaging.SendEmailResult[] results = Messaging.sendEmail(emailList);
        if (results[0].success)
        {
        System.debug('The email was sent successfully.');
        } else {
        System.debug('The email failed to send: '+ results[0].errors[0].message);
        }
        }
}
}