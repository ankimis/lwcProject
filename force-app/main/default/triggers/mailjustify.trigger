trigger mailjustify on Account (after update) {
  set<Id> setId = new set<Id>();
    for(Account acc:trigger.new){
       setId.add(acc.Id);
    }
    List<Contact> conrec =[select Id,Name,Email from Contact where AccountId IN:setId];
    if(conrec.size()>0){
        List<Messaging.SingleEmailMessage> Mail =new List<Messaging.SingleEmailMessage>();
        for(Contact con :conrec){
            Messaging.SingleEmailMessage mails=new Messaging.SingleEmailMessage();
           // mails.bccaddresses(false);
           // mails.setBccAddresses(false);
            mails.setBccSender(false);
            mails.setSenderDisplayName('your Account update info');
            mails.setSaveAsActivity(false);
            string body = 'your account is updated '+con.LastName;
            mails.setHtMLBody(body);
            mails.toAddresses = new string[]{con.Email};
                mail.add(mails);
        }
        
        if(mail.size()>0){
            messaging.SendEmailResult [] save= Messaging.sendEmail(mail);
             if (save[0].success)
                {
                System.debug('The email was sent successfully.');
                } else {
                System.debug('The email failed to send: '+ save[0].errors[0].message);
                }
        }
        }
    
}