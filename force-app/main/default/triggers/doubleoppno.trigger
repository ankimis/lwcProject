trigger doubleoppno on Opportunity (before insert) {
    map<string,Opportunity> oppName= new  map<string ,Opportunity>();
    for(Opportunity opp:trigger.new){
        oppName.put(opp.Name, opp);
    }
string errorMessage ='';
    if(oppName.size()>0){
        List<Opportunity> oppRecord=[select Id,Name from Opportunity where Name IN:oppName.keySet()];
        if(oppRecord.size()>0){
            for(Opportunity opprec:oppRecord){
                if(oppName.get(opprec.Name)!=null){
                errorMessage = 'your Name Already Exist';    
                }if(errorMessage!=''){
                     trigger.new[0].addError('In Database'+errorMessage);
                }
            }
        }
    }
}