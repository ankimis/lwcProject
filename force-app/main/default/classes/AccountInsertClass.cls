public class AccountInsertClass {
       public static void accDelete(List<Account> oldList){
             //Your code in the class
           for(Account acc : oldList){
               if(acc.Active__c =='Yes'){
                   acc.AddError('you can not delete this Acoongvkfjh');
               }
           }
         }
    @InvocableMethod (label='Create Account')
    public static void accInsert(List<Account> newList){
        for(Account acc : newList){
            if(acc.Active__c == null || acc.AccountNumber == null){
               acc.adderror('can not blankaa');
            }else{
             acc.AnnualRevenue =1000000;
            }
        }
    }
    public static void accInsert1(List<Account> newList){
        List<Opportunity> aaappTo =new List<Opportunity>();
        List<Case> caseList=new List<Case>();
        for(Account acc : newList){
            Opportunity opp= new Opportunity();
                opp.Name = acc.Name;
                opp.AccountId =acc.Id;
                opp.StageName ='Prospecting';
                opp.CloseDate = System.today();
                aaappTo.add(opp);
            	Case cas= new Case();
            cas.AccountId=acc.Id;
            cas.Status='New';
            cas.Origin='HIgh';
            caseList.add(cas);
            }
                    Database.SaveResult[] srList = Database.insert(aaappTo,false);
                    for(Integer i=0; i<srList.size(); i++){
                        if(!srList[i].isSuccess()){
                            string errors ='';
                            for(Database.Error err :srList[i].getErrors()){
                                errors =errors+err.getMessage();
                            }
                            newList[i].addError(errors);
                        }
                    }
       insert caseList;

        }
    public static void accToOpp (List<Account> newList){


    }
    @AuraEnabled
    public static Contact createAccount(Contact conData) {
        system.debug('acc'+conData);
        insert conData;
        return conData;
    }
}