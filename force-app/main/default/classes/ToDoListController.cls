public with sharing class ToDoListController {
    @AuraEnabled(cacheable=true)
    public static List<Task> gettasks() {
        return [select Subject From Task Where OwnerId =: UserInfo.getUserId()];

    }
}