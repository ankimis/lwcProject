trigger EMPLOYEEPopulate on EMPLOYEE__c (after update,after insert  ) {
    set<Id> em =new set<Id>();
    List<task> Task = new List<task>();
    
    if(trigger.isAfter){
       for(EMPLOYEE__c emp :trigger.new){
  		  Task tt=New Task();
           tt.WhatId=emp.Id;
           tt.Status=emp.Address__c;
           tt.Subject='employee';
           Task.add(tt);
       }
        insert Task;
    }
   
   }