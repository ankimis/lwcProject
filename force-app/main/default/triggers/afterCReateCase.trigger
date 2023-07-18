trigger afterCReateCase on Contact (after insert) {
    List<Case> casLIstCreate =new List<Case>();
    List<Opportunity> oppCreate =new List<Opportunity>();
    List<CampaignMember> camCreate=new List<CampaignMember>();
    For(Contact con :trigger.new){
        Case cas =  new Case();
       cas.ContactId = con.Id ;
        cas.Status ='New';
        cas.Priority ='Low';
        casLIstCreate.add(cas);
        Opportunity opp = new Opportunity();
        opp.ContactId =con.Id;
        opp.Name='ankit';
        opp.StageName='Closed Won';
        opp.CloseDate =Date.today();
        oppCreate.add(opp);
     
        
    }
        insert oppCreate;
     
        insert casLIstCreate;
    }