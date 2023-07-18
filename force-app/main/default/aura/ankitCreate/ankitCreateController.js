({
	getContent : function(component, event, helper) {
        var action =component.get("c.getCon");
       // alert(action);
        action.setCallback(this,function(response){
            var state = response.getState();
           // alert(state);
            if(state =='SUCCESS'){
               
                var returndata =response.getReturnValue();
                for(var i=0;i<returndata.length;i++){
                    //alert(returndata[i].Name);
                   component.set("v.getConList",returndata);
                    
                }
                // alert('returndata');
            }
            
        });
        $A.enqueueAction(action);
   
	},
    openCreate : function(component, event, helper) {
        component.set("v.openCreate",true);
       //alert("yes");
		},
    openCreateContact : function(component, event, helper) {
        var name =component.find("conName").get("v.value");
        var email =component.find("conEmail").get("v.value");
        //alert(name+Email);
        var action =component.get("c.insertCon");
        action.setParams({'lastName' : name,'email' : email});
        action.setCallback(this, function(responce){
            alert(responce.getState());
            if(responce.getState() == "SUCCESS"){
                $A.get('e.force:refreshView').fire();
            }
        });
        $A.enqueueAction(action);	
    },
    
      openDelete : function(component, event, helper){
       //alert("Delet"); 
       var conId =event.currentTarget.dataset.conid;
       var action =component.get("c.insertCon1");
          action.setParams({'Id' : conId});
          action.setCallback(this,function(responce){
               if(responce.getState() == "SUCCESS"){
                $A.get('e.force:refreshView').fire();
            }
                        });
          $A.enqueueAction(action);
    },
      openUpdate : function(component, event, helper){
       //alert("Delet"); 
       var conId =event.currentTarget.dataset.conid;
        //  alert(conId);
       var action =component.get("c.getConById");
          action.setParams({'Idd' : conId});
          action.setCallback(this,function(data)
          {
               //var state = response.getState();
              alert(data.getState())
                        var returndata =data.getReturnValue(); 
         
                 for(var i=0;i<returndata.length;i++){
                    alert(returndata[i].Name);
                    var Id = returndata[i].Id;
                     
                   component.set("v.Name",returndata);
                    
                }

            });
            $A.enqueueAction(action);
    },
    editContact : function(component,event,helper){
         var name =component.find("name1").get("v.value");
        var email =component.find("email1").get("v.value");
        var conId =event.currentTarget.dataset.conid;
        alert("name"+name+"email"+email+"Id"+conId);
        var action =component.get("c.editCon");
        action.setParams({'lastName' : name,'email' : email ,'Id' : conId});
        action.setCallback(this, function(data){
            alert(data.getState());
            if(data.getState() == "SUCCESS"){
                $A.get('e.force:refreshView').fire();
            }
    });
          $A.enqueueAction(action);	
     }
    
})