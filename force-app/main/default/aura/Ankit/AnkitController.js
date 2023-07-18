({
	doInit11 : function(component, event, helper) {
		var action = component.get("c.getAccounts");
        console.log(action);
        action.setCallback(this,function(response){
		var state= response.getState();
        if(state === "SUCCESS"){
            component.set("v.accList",response.getReturnValue());
            
        }
        
                           });
            $A.enqueueAction(Action);
	}
})