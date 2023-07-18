trigger ContaactInsert on Contact (before insert) {
    
        for(Contact con:trigger.new){
                if(con.LeadSource == 'web'){
                    con.Phone='97988253';
                    con.Email=';ankit@gmail.com';
                }
            }
}