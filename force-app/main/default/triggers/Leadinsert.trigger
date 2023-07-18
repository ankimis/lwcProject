trigger Leadinsert on Lead (before insert) {
    for(Lead le:trigger.new){
        le.FirstName ='DR' + le.FirstName;
        le.Salutation ='Dr';
       
    }

}