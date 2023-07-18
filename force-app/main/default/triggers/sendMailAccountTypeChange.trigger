trigger sendMailAccountTypeChange on Account (after update){
Set<Id> accId=new Set<Id>();
for(Account acc:Trigger.new){
//checking if the Account Type value has changed during update
if(acc.Type != Trigger.oldMap.get(acc.id).Type){
accId.add(acc.Id);
    System.debug('The email was sent wr.'+acc.Id);
}
}
//getting all the contacts of that Account
List<Contact> conList=[Select Id,LastName,Email,AccountId,Account.Name from Contact where AccountId=:accId ];
List<Messaging.SingleEmailMessage> emailList= new List<Messaging.SingleEmailMessage>();
if(conList.size()>0){
for(Contact conObj:conList){
//checking if the Contact Email is null
if(conObj.Email!=null){
Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
mail.setTargetObjectId(conObj.Id);
mail.setSenderDisplayName('System Administrator');
mail.setUseSignature(false);
mail.setBccSender(false);
mail.setSaveAsActivity(false);
mail.setSubject(' Account Update Info.');
String body = 'Dear '+conObj.LastName+', <br/>';
body+='Your account information has been updated successfully.<br/><br/>Account Name : '+conObj.Account.Name;
mail.setHtmlBody(body);
mail.toAddresses = new String[]{conObj.Email};
//Adding singleEMailMessage to List of singleEMailMessage
emailList.add(mail);
}
}
}
if(emailList.size()>0){
//Sending the List of singleEMailMessage
Messaging.SendEmailResult[] results = Messaging.sendEmail(emailList);
if (results[0].success)
{
System.debug('The email was sent successfully.');
} else {
System.debug('The email failed to send: '+ results[0].errors[0].message);
}
}
}