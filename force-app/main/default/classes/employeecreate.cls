public class employeecreate {

    @AuraEnabled
     public static List<EMPLOYEE__c> getEmployeList(){
        List<EMPLOYEE__c> accountlwc =[select Id,First_Name__c,Last_Name__c from EMPLOYEE__c ];
        system.debug('accountlwc :'+accountlwc);
         return accountlwc;
         
    }
}