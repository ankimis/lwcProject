trigger afterCReate on Case (before insert) {
	List<Contact> conLIstCreate =new List<Contact>();
    For(Case cas :trigger.new){
        Contact con =  new Contact();
        
    }
    
    
}