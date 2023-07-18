public with sharing class weatherAppsController {
        @AuraEnabled
        public static string getWeatherDetails(String input){
            String url = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=matric'+getKey();
            system.System.debug(url);
            String responce =getResponse(url);
             return responce;
        }
        public static String getResponse(String strUrl){
            Http h= new Http();
            HttpRequest req = new HttpRequest();
            HttpResponse res= new HttpResponse();
            req.setMethod('GET');
            req.setEndpoint(strUrl);
            req.setTimeout(120000);
            res =h.send(req);
            String responceBody =res.getBody();
            return responceBody;
        }
        public static String getKey(){
            String key= '2388ddc68c712e3c56482011b2667554';
            String output ='&units=matric&appid='+key;
            return output;
        }
    }