global class AccountUpdateBatchJobscheduled implements Schedulable {
    global void execute(SchedulableContext sc) {
        batch b = new batch(); 
        database.executebatch(b);
    }
}