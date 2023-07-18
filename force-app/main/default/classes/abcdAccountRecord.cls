public with sharing class abcdAccountRecord {
    public abcdAccountRecord() {

    }
    @AuraEnabled
    public static List<Account> accountRecord(){
        try {
            return [select Name,Id FROM Account ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Account> deleteId(String deleteId){
        try {
            List<Account> accList =[select Id ,Name FROM Account WHERE Id =:deleteId];
            if (accList.size()>0) {
                for(Account acc:accList){
                    delete accList;
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
    
}