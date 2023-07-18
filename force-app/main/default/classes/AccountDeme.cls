public with sharing class AccountDeme {

    @AuraEnabled
    public static Contact createAccount(Contact conData) {
        system.debug('conData'+conData);
        insert conData;
        return conData;
    }
}