trigger ImopratntAmountCount on Opportunity (before insert,before update) {
   map<Id,double> ListMap= new map<Id,double>();
  map<Id,double> ListMap1= new map<Id,double>();
    if(trigger.isInsert){
    for(Opportunity opp:trigger.new){
        ListMap.put(opp.AccountId,opp.Amount);
     }
    }
    
    if(trigger.isUpdate){
     for(Opportunity opp:trigger.new){
         if(opp.Amount!=trigger.oldmap.get(opp.Id).Amount){
           double backAmount=trigger.oldmap.get(opp.Id).Amount;
           ListMap.put(opp.AccountId,opp.Amount);
           ListMap1.put(opp.Id,backAmount);
         }
     }   
    }
    
    if(ListMap.size()>0){
      AggregateResult oppRec =[select Sum(Amount)amountOfOpp from Opportunity
                                   where AccountId IN:ListMap.keySet()];
        system.debug('total'+oppRec);
        Double amt = (Double)oppRec.get('amountOfOpp');
        system.debug('total'+amt);
      
        for(Id AccId:ListMap.keySet()){
            for(Id backId:ListMap1.keySet()){
                 Double backAmount=ListMap1.get(backId);  
            Double cur=ListMap.get(AccId);
            Double total=amt+cur-backAmount;
                 if(total>40000){
        	       Trigger.new[0].addError('you not Create & Update Amount Above to 40000');
            }
           }
        }
    }

}