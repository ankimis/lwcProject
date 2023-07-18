public with sharing class newsController {
    @AuraEnabled
    public static Map<String,Object> retriveNews(){
        HttpRequest httpRequest =new HttpRequest();
        httpRequest.setEndpoint('https://newsapi.org/v2/everything?q=tesla&from=2023-02-08&sortBy=publishedAt&apiKey=1a890b91de9548ca8eac7a96b918d030');
        httpRequest.setMethod('GET');
        Map<string,object> newsData = new Map<string,object>();
        string strResponse = null;
            try{
                Http http =new Http();  
                HttpResponse httpResponse = http.send(httpRequest);
                if(httpResponse.getStatusCode() == 200){
                    strResponse = httpResponse.getBody();  
                }else{
                    throw new CallOutException(httpResponse.getBody());
                }
            }  catch(Exception ex){
                throw  ex;
            } 
            if(!String.isBlank(strResponse)){
                newsData =(Map<String,Object>)JSON.deserializeUntyped(strResponse); 
            }
            if(!newsData.isEmpty()){
                return newsData;
            }else{
                return null;
            }
        }
    }