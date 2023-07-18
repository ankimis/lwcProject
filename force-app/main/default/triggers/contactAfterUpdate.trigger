trigger contactAfterUpdate on Account (after update) {
    Set<ID> accID =new SET<ID>();
    List<Opportunity> UpdateoppList = new List<Opportunity>();
    List<Case> UpdateCase = new List<Case>();
    List<Contact> UpdateCon = new List<Contact>();
    
    for(Account acc : trigger.new){
        accID.add(acc.Id);
        List<Opportunity> oppList =[select  AccountId,Name,CreatedDate,StageName from Opportunity where AccountId IN : accId];
        dateTime dayvalue =system.now()-30;
        
        for(Opportunity opp :oppList){
            if(opp.CreatedDate < dayvalue && opp.StageName !='Closed Won'){
                opp.StageName = 'Closed Lost';
                UpdateoppList.add(opp);
            }
        }
        List<Case> casCreate  =[select AccountId,Origin,Priority,Reason from Case where AccountId IN:accId ];
                for(Case caseAfter :casCreate){
                if(caseAfter.Priority=='Low'){
                    
                    caseAfter.Origin='Email';
                    caseAfter.Priority='High';
                    UpdateCase.add(caseAfter);
                    }
                }
         List<Contact> conCreate  =[select AccountId,CleanStatus,Title from Contact where AccountId IN:accId ];
                for(Contact con :conCreate){
                    con.Email='Email@gmail.com';                    
                    UpdateCon.add(con);
                }
    }
    Update UpdateoppList;
    Update UpdateCase;
    update UpdateCon;
}