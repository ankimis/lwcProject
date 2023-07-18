@istest
private class testcontact {
 @istest
    private static void testContact(){
        List<Contact> conList = new List<Contact>();
        for(integer i=0; i<10; i++){
            Contact con =  new Contact();
            con.LastName = 'test'+i; 
            conList.add(con);            
        }
        insert ConList;
        system.test.starttest();        
            batchUpdte aa=new batchUpdte();
    		Id batchID = Database.executeBatch(aa);
		system.test.stoptest();
        
        List<Contact> conrec =[Select Id From Contact Where LeadSource = 'Phone Inquiry'];
            system.assertEquals(10, conrec.size());       
        
    }

}