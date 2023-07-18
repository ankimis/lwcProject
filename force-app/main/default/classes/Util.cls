public class Util {
     @future(Callout=true)
    public static void insertUserWithRole(
        String uname, String al, String em, String lname) {

        Profile p = [SELECT Id FROM Profile WHERE Name='Chatter Free User'];
       //UserRole r = [SELECT Id FROM UserRole WHERE Name='CEO'];
        // Create new user with a non-null user role ID 
        User u = new User();
            u.Alias=al;
            u.Email='gguguu@gamil.com';
            u.EmailEncodingKey='UTF-8';
                u.Username=uname;
                u.LanguageLocaleKey='en_Us';
                u.LocaleSidKey='en_Us';
                u.TimeZoneSidKey='America/Los_Angeles';
                u.ProfileId= p.Id;
               // u.UserRoleId=r.Id;
                u.LastName=lname;
            system.debug('Record User'+u);
            insert u;

    }
      @future
    public static void updateUserWithRole(
        String uname, String al, String em, String lname) {

        Profile p = [SELECT Id FROM Profile WHERE Name='Chatter Free User'];
        //UserRole r = [SELECT Id FROM UserRole WHERE Name='COO'];
          User us  =[SELECT Id FROM User   WHERE UserName='mdruirz@awcomputing.com'];
          system.debug('Record User'+us);   
        // Create new user with a non-null user role ID 
        User u = new User();
            u.Id=us.Id;
            u.Alias=al;
            u.Email='ewefw@gamil.com';
            u.EmailEncodingKey='UTF-8';
                u.Username=uname;
                u.LanguageLocaleKey='en_Us';
                u.LocaleSidKey='en_Us';
                u.TimeZoneSidKey='America/Los_Angeles';
                u.ProfileId= p.Id;
               // u.UserRoleId=r.Id;
                u.LastName=lname;
            system.debug('Record User'+u);
            
        update u;
    }
}