trigger oppppcountAmount on Opportunity (before insert,before update) {
  map<Id,double> ListMap= new map<Id,double>();
    if(trigger.isInsert){
    for(Opportunity opp:trigger.new){
        ListMap.put(opp.AccountId,opp.Amount);
     }
    }
    if(trigger.isUpdate){
     for(Opportunity opp:trigger.new){
        ListMap.put(opp.Id,opp.Amount);
     }   
    }
    if(ListMap.size()>0){
      AggregateResult oppRec =[select Sum(Amount)amountOfOpp from Opportunity
                                   where AccountId IN:ListMap.keySet()];
        system.debug('total'+oppRec);
        Double amt = (Double)oppRec.get('amountOfOpp');
        system.debug('total'+amt);
      
        for(Id AccId:ListMap.keySet()){
             Double cur=ListMap.get(AccId);
           // Double total=amt+cur;
                 if(cur>40000){
        	       Trigger.new[0].addError('you not Create & Update Amount Above to 40000');
            }
        }
    }
}