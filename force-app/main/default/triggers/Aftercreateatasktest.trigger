trigger Aftercreateatasktest on Account (after insert) {   
    for(Account AccRec: trigger.new){
        // create A Task
        list<task> Task = new List<task>();
        if(trigger.isInsert && trigger.isAfter){
            Task tss = new Task(); 
           // tss.WhatId =AccRec.Id;
            tss.Status =AccRec.Active__c;
            tss.Subject='Follow Up Test Task';
           // tss.ActivityDate = TODAY() +90;
            Task.add(tss);
            if(Task.size()>0){
                insert Task;
            }else{

            }            
        }
    }

}