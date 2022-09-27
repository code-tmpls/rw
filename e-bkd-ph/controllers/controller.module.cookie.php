<?php
session_start();
require_once '../core/app.database.php';
require_once '../core/app.initiator.php';
require_once '../repo/data.module.cookie.php';

if(isset($_GET["action"])){
 if($_GET["action"]=='APP_COOKIE_SETTINGS'){
  $status = 'Failed';
  $message = "You don't have Access to get Token";
  $validDomain = false;
  // Get Data from Database
  $jsonData = json_decode( $database->getJSONData($cookieModule->query_view_CookieSettings('COOKIE_TOKEN')) );
  $domains = explode("|",$jsonData[0]->{"domain_allowed"}); // List of Domains Allowed
  for($index=0;$index<count($domains);$index++){
	$currentHost = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
	if(isset($_SERVER["HTTP_REFERER"])) {
	  $currentHost = $_SERVER["HTTP_REFERER"];
	}
	if(strlen($domains[$index])>0 && strstr($currentHost, $domains[$index])!=false){ 
	  $validDomain = true;
      break;
	}
  }
 } 
 if($validDomain){
    $status = "Success";
    $message = $jsonData[0]->{"c_value"};
 } 
 $content = array();
 $content["status"] = $status;
 $content["message"] = $message;
  echo json_encode($content);
} 
else { 
 $content = array();
 $content["status"] = "Failed";
 $content["message"] = "Expecting Action Parameter";
 echo json_encode($content);
}
	