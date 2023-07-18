global with sharing class LoginUser {
    @AuraEnabled
    global static String login(String userName, String password){
        try {
            String homeURl ='https://amazonname-developer-edition.ap26.force.com/s//';
            ApexPages.PageReference pageRef=Site.login(userName, password,homeURl);
            return   pageRef.getUrl();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
     
}