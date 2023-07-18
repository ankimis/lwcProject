public Class FutureMathod{
    @future(callout=true)
    public static void ankit(string accId){
        List<Account> AccRec =[select Id,Name from Account where Id = :accId];
        system.debug('account Record'+AccRec);
    }
}