({
	dateUpdate : function(component, event, helper) {
        var  today = new Date();
        var dd =today.getDate();
         var mm =today.getMonth();
         var yyyy =today.getFullYear();
        if(dd < 10){
            dd ='0'+dd;
        }
          if(mm < 10){
            mm ='0'+mm;
        }
        var todayformate =yyyy + '-' + mm + '-' + dd;
         
       
        var a1 = component.find("v.testDate");
        var a2 = a1.getvalue();
        alert(a2);
        if(component.get("v.testDate") =='' || component.get("v.testDate") < todayformate){
            component.set("v.dateValidationError",true);
            
            
            
        }else{
            component.set("v.dateValidationError",false);
        }
    },
    submit : function(component, event, helper) {
    var errorb = component.get("v.dateValidationError");
    if(errorb != true){
    alert('enter date is valid date');
}
	

	}
    
})