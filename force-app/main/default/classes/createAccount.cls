public class createAccount {
    @AuraEnabled
    public static List<Contact> getCon(){
        return [select Id, Name,Email,Phone from Contact ORDER by Name	];
        
        
    }
    @AuraEnabled
    public static Boolean  insertCon(string lastName,string email){
        Contact con= new Contact();
        con.LastName=lastName;
        con.Email=email;
        insert con;
        
        return true;
    }
     @AuraEnabled
    public static void  insertCon1(string Id){
        Contact con= new Contact();
        con.Id=Id;
        Delete con;
    }
    @AuraEnabled
    public static List<Contact> getConById(string Idd){
        return [select Id,Name,Email,Phone from Contact where Id =: Idd];
    }
     @AuraEnabled
    public static Boolean  editCon(string lastName,string email,string Id){
        list<Contact> conList =new list<Contact>();
        Contact con= new Contact();
        con.Id =Id;
        con.LastName=lastName;
        con.Email=email;
        conList.add(con);
        Database.SaveResult [] srList =database.update(conList,false);
        for(Database.SaveResult sr:srList)
        {
            if(sr.isSuccess()){
                system.debug('siccessfullly inserted Account account.acoount.Id'+sr.getId());
            }else{
                    for(Database.Error err:sr.getErrors())
                        {
                            system.debug('failed inserted Account account.acoount.Id'); 
                            system.debug(err.getStatusCode()+''+err.getMessage());
                            system.debug('Account Failed Fields This Error'+err.getFields());
                        }
                }
   }
        
        return true;
    }

}