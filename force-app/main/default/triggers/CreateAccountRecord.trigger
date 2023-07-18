trigger CreateAccountRecord on Account (before insert ,after insert, before update) {
    if(Trigger.isbefore ){
        AccountTrigger.beforeinsert(Trigger.new);
        
    }
    if(Trigger.isupdate ){
        AccountTrigger.beforeupdate (Trigger.new);
        
    }
      if(Trigger.isafter ){
        AccountTrigger.beforeoppo(Trigger.new);
        
    }
    
}