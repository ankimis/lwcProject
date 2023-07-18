public class AccountTrigger {
    public static void beforeinsert(List<Account>newList){
        for( Account Acc:newList){
            if(acc.Industry != NULL ){
                acc.Rating = 'HOT';
                
            }            
        }
        
    }
    public static void beforeupdate(List<Account>newList){
        for( Account Acc:newList){
            if(acc.Industry != NULL ){
                acc.Rating = 'cold';
                
            }            
        }
        
    }
     public static void beforeoppo(List<Account>newList){
        for( Account Acc:newList){
            if(acc.Industry != NULL ){
                acc.Rating = 'cold';
                
            }            
        }
        
    }

}