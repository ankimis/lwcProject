trigger DuplicatrContact on Contact (before insert, before update) {
    Map<string, Contact> emailMap =new  Map<string,Contact>();
    Map<string, Contact> phoneMap =new  Map<string,Contact>();
    for(Contact con:trigger.new){
    if(trigger.isInsert){
        emailMap.put(con.Email, con);
        phoneMap.put(con.Phone, con);
    }
        if(trigger.isUpdate){
            if(trigger.oldMap.get(con.id).Email != con.Email){
           emailMap.put(con.Email, con);
            }
            if(trigger.oldMap.get(con.id).Phone != con.Phone){
       			 phoneMap.put(con.Phone, con);      
            }
    }
    }
    string errorMessage ='';
    List<contact> conList =[select Id,Email,Phone From Contact Where   Phone IN: phoneMap.keySet() Or Email IN: emailMap.keySet()];
      
   
    if(conList.size()>0){
     
        for( Contact conrec:conList){
           
            if(conrec.Email!=null){
               
                if(emailMap.get(conrec.Email) != null){
                    system.debug('Phone'+emailMap.get(conrec.Email));
                    errorMessage ='Email';
                }
            }
            if(conrec.Phone!=null){
               system.debug('Phone'+ conrec.Phone);
                 system.debug('Phone'+phoneMap.get(conrec.Phone));
                if(phoneMap.get(conrec.Phone) != null){
                    system.debug('Phone'+phoneMap.get(conrec.Phone));
                   errorMessage = errorMessage + (errorMessage != '' ? 'and Phone' : 'Phone');
                }
            }
                
            
            if(errorMessage!= ''){
                trigger.new[0].addError('Your contact'+errorMessage+'already exists');
            }
        }
    }
    

}