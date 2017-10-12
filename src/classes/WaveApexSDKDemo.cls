public  with sharing class WaveApexSDKDemo{
   
   public static string getDataFromDataset(){
      Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{
        Wave.QueryBuilder.get('Account_Name').alias('Account_Name'), 
        Wave.QueryBuilder.get('Account_Type').alias('Account_Type'), 
        Wave.QueryBuilder.get('Amount').sum().alias('sum_Amount'),                                     
        Wave.QueryBuilder.count().alias('count')};
        ConnectApi.LiteralJson result = Wave.QueryBuilder.load('0Fb1I000000PC4ASAW', '0Fc1I000000PSAzSAO')
          .group(new String[]{'Account_Name', 'Account_Type'})
          .foreach(projs)
          .execute('q');
        String response = result.json;
        system.debug('RESPONSE..'+response);
        return response;
   }

}