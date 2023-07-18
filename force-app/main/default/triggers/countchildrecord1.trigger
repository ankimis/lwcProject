trigger countchildrecord1 on Account (before update) {
    set<Id> SEtId = new Set<Id>();
    for(Account Acc:trigger.new){
        SEtId.add(Acc.Id);
    }
    If(SEtId.size()>0){
        List<Contact> contactRecord = [Select Id,LastName from Contact where AccountId IN:SEtId];
    		 system.debug('recordsize'+contactRecord.size());
       double rec = contactRecord.size();
        List<Account> conRec = new   List<Account>();
         for(Account Acc:trigger.new){
        		Acc.Number_of_contacts__c=rec;
            // conRec.add(Acc);
    }
        if(conRec.size()>0){
        // Update conRec;
    }
    }
}