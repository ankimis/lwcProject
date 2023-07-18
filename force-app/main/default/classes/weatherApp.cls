public with sharing class weatherApp {
    public static string getWeatherDetails(string input){
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=matric'+getKey();
        string responce =getResponse(URL);
    }
    public static string getResponse(string strUrl){
        Http h= new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res= new HttpResponse();
        res.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(120000);
        res =h.send(req);
        string responceBody =res.getBody();
    }
    public static string getKey(){
        string key= '321c2cb4a9dfecba09f638bbce6313fe';
        string output ='&appid'+key;
        return output;
    }
}