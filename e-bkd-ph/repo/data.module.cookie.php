<?php 
class CookieModule {
 function query_view_CookieSettings($key){
  return "SELECT * FROM settings_cookies WHERE c_key='".$key."';";
 } 
}
$cookieModule = new CookieModule();
?>