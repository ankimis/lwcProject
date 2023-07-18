public class AftercreateAccount {
    public static void insertrecod (list<Account> accList ) {
        list<Contact> conList =new list<Contact>();
        for(Account accrec:accList){
            Contact con = new Contact();
            con.AccountId =accrec.Id;
            con.LastName=accrec.Name;
            conList.add(con);
        }
          Database.SaveResult[] saverec=Database.insert(conList,false);
        for(Database.SaveResult save:saverec){
            if(save.isSuccess()){
                system.debug('your record is Successfullyb Added');
            }else {
                for(Database.Error err:save.getErrors()){
                    system.debug('Error'+err.getStatusCode());
                    system.debug('massage'+err.getMessage());
                }
        }
    }
}
}