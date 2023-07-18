trigger afterInsertContact on Contact (after insert) {
   
    List<Account> accList = new List<Account>();
    for(Contact con:trigger.new){
        if(con.AccountId == null){
            Account acc = new Account();
            acc.Name=con.LastName;
            acc.Phone=con.Phone;
            accList.add(acc);
        }
    }
        insert accList;
    }