public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountRecord(){
        try {
            return [select Name,Id FROM Account ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<account> fetchUpdateRecord(string accId){
        try {
           return [select Id,Name,Industry,Phone,Description From Account Where Id=:accId];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }


    }
    @AuraEnabled
    public static List<Account> updateRecod(String accId,String accDesgination,String accName,String accEmail,String accPhone){

     Account acc=[select Id,Name, Industry,Phone,Description From Account Where Id=:accId];
     acc.Name = accName;
     acc.Phone = accPhone;
     acc.Industry = accEmail;
     acc.Description = accDesgination;
     System.debug('UpdateRecord'+accName+accPhone+accEmail+accDesgination);

        try {
            update acc;
            System.debug('UpdateRecord'+acc);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            // system.debug('unamle to creat a record'+e.getMessage());
        }
        return accountRecord();
    }
    @AuraEnabled
    public static List<Account> deleteRecord(String deleteId){
        try {
            List<Account> accList =[select Id ,Name FROM Account WHERE Id =:deleteId];
            if (accList.size()>0) {
                for(Account acc:accList){
                    delete accList;
                    System.debug('List'+accList);
                    return accList;
                }
            } else {
                // console.log('Unable to delete'+deleteId)
                // return deleteId;
            }

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return null;
    }
    @AuraEnabled
    public static List<Account> createRecord(String accName,String accPhone ){
        List<Account> accList = new List<Account>();
        Account acc= new Account();
        acc.Name = accName;
        acc.Phone=accPhone;
        accList.add(acc);

        try {
            insert accList;
            return accList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        // return null;
    }
    // Create contact how to do that

}