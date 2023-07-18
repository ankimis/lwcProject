trigger afterInsertContac on Account (after insert) {
    List<Contact> contactNewRecord =new List<Contact>();
    List<Case> caseCreate =new List<Case>();
    for(Account acc:trigger.new){
        Contact con =new Contact();
        con.LastName=acc.name;
        con.AccountID=acc.Id;
     contactNewRecord.add(con);   
     Case cas =new Case();
        cas.AccountID =acc.id;
        cas.Status ='Working';
        cas.Origin ='Phone';
        caseCreate.add(cas);
    }
    insert contactNewRecord;
    insert caseCreate;

}