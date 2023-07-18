import { LightningElement,track,wire} from 'lwc';
import gettasks from '@salesforce/apex/ToDoListController.gettasks';
export default class Todolist extends LightningElement {
    newtask="";
    // @track
    todotask=[];
    updatenewtask(e){
       this.newtask =e.target.value;
    }
    addtasknewbutton(e){
        this.todotask.data.push({
            Id:this.todotask.data.length+1,
            Subject:this.newtask
        })
       this.newtask="";
        console.warn(this.todotask);
    }
    deletetask(e){
        let delet = e.target.value;
       let todotask= this.todotask;
       let arrayindex;
        for(let i=0; i<todotask.length;i++){
            if(todotask[i].id === delet){
                this.arrayindex =i;
            }
            this.todotask.splice(arrayindex,1)
        }
    }
    @wire(gettasks)
    gettodotask(response){
        console.log(response);
        let data =response.data;
        let error =response.error;
        if(data){
            console.log(data);
            data.forEach(task => {
                this.todotask.push({
                        // id: this.todotask.data.length+1,
                        Subject: this.newtask.Subject,
                        recordId: task.id
                        });
            })
        }else {
            console.log('error');
            console.log(error);

        }

    }

}