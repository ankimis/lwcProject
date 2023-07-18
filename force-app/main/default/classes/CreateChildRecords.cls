public class CreateChildRecords  {

@InvocableMethod (label='Create Contacts') 

public Static void createContact(List<Id> accIds){ 

List<Contact> conListToInsert = new List<Contact>(); //list to collect and insert the contacts 

//Query the accounts 

List<Account> accList = [Select Id, Name, Number_of_Contacts__c from Account where Id =:accIds];

//loop through the accounts and create contacts

for(Account acc : accList)

{

if(acc.Number_of_Contacts__c != null)

{

for(integer i=1;i<=acc.Number_of_Contacts__c;i++)

{

Contact con = new Contact();

con.LastName = 'Invocable' + acc.Name +' '+ i;

con.AccountId = acc.Id;

conListToInsert.add(con);

 }  }  }

if(!conListToInsert.isEmpty()) {

insert conListToInsert; }   } }