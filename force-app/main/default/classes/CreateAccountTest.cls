public class CreateAccountTest {
    
    @auraEnabled
    public static List<Account> getAccounts(){
        List<Account> acclist = new List<Account>();
       acclist=[select Id,Name from Account LIMIT 10];
        return acclist;
    }
	}