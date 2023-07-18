trigger CaseCreate on Case (before insert) {
    for(Case cas:trigger.new){
        if(cas.Origin == 'Email'){
            cas.Status='New';
           	cas.Priority='Medium';
        }
    }
}