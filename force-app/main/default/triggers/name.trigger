trigger name on Account (before insert) {
    for(Account acc: Trigger.new ){
            acc.Description = 'test Account acc';
    }
}