trigger contactName on Contract (before insert) {
   Map<string,Contract> conMap =new Map<string,Contract>();
    for(Contract con:trigger.new){
        if(trigger.isInsert){
         conMap.put(con.Name,con);
      }
    }
    string errormessage='';
    List<Contract> conRec =[select Id,Name from Contract where Name In:conMap.keyset()];
    if(conRec!=Null){
        for(Contract cont:conRec){
        if(conMap.get(cont.Name)!=null){
            errormessage='your contract name';
          }
        }
        if(errormessage!=''){
            trigger.new[0].addError('allready'+errormessage);
        }
     }

}