@isTest
public class TestBatchOpp {
    @isTest
    private static void testBatchApexClass(){
        List<Opportunity> oppList =new List<Opportunity>();
        for(integer i=0;i<200;i++){
            oppList.add(new Opportunity(Name='Test'+i, StageName='Prospecting', CloseDate=system.today()));
        }
       insert oppList;

		system.test.startTest();
        BatchOppurtunity aaa= new BatchOppurtunity();
		Id BatchId = Database.executeBatch(aaa);
       System.test.stopTest();
        List<Opportunity> updateopp=[select Id from Opportunity where LeadSource ='Web' ];
        System.AssertEquals(200, updateopp.size());
    }
}