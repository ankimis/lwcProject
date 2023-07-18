public class MixedDMLFuture {
       public static void useFutureMethod() {
        // First DML operation
        Account a = new Account(Name='Acme');
       // insert a;
        
        // This next operation (insert a user with a role) 
        // can't be mixed with the previous insert unless 
        // it is within a future method. 
        // Call future method to insert a user with a role.
        Util.insertUserWithRole(
            'mdruirz@awcomputing.com', 'Akawl', 
            'mrrudiz@awcomputing.com', 'Miswhra');        
    }
    public static void aaaa(){
        FutureMathod.ankit('0015i0000083GjUAAU');
    }
    public static void useFutureMethod1() {
        // First DML operation
        Account a = new Account(Name='Acme');
       // insert a;
        
        // This next operation (insert a user with a role) 
        // can't be mixed with the previous insert unless 
        // it is within a future method. 
        // Call future method to insert a user with a role.
        Util.updateUserWithRole(
            'mdrusirz@awcomputing.com', 'UpwdateA', 
            'mrrudisz@awcomputing.com', 'UpdawteM');        
    }
}