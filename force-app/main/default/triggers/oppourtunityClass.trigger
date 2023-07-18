trigger oppourtunityClass on Opportunity (before insert,before update,before delete) {
    map<string,Opportunity> DoubleaName = new map<string,Opportunity>();
     for(Opportunity opp:trigger.new){
      DoubleaName.put(opp.Name,opp);
    }
    set<id> setId =new set<id>();
    if(trigger.isdelete){
        for(Opportunity opp:trigger.new){
            if(opp.AccountId !=''){
             opp.addError('you are not delete Record byb the way Related To Account');
        }
        
    }
    }
    
   list<Opportunity> oppl=[select  Id,Name from Opportunity where Name In : DoubleaName.keySet()]; 
    if(oppl.size()>0){
        for(Opportunity opp:trigger.new){
     opp.addError('already Exist');
    }
    } 
}