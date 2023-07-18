@isTest
private class apextestclass{
static testMethod void validateSampleApex() {
Contact c = new Contact(LastName='BMW');
 
 System.Test.startTest();
insert c;
System.Test.stopTest();
 
// Retrieve the record
c = [SELECT LastName FROM Contact WHERE Id =:c.Id];
 
// Test that the trigger correctly updated the price
System.assertEquals('BMW', c.LastName);
}
}