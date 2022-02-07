<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>
<?php
// Website Contact Form Generator 
// http://www.tele-pro.co.uk/scripts/contact_form/ 
// This script is free to use as long as you  
// retain the credit link  

// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "info@oswplanthire.co.uk";
$Subject = "OSW Internet Enquiry";
$CompanyName = Trim(stripslashes($_POST['CompanyName'])); 
$YourName = Trim(stripslashes($_POST['YourName'])); 
$ContactTelephone = Trim(stripslashes($_POST['ContactTelephone'])); 
$TypeofPlant = Trim(stripslashes($_POST['TypeofPlant'])); 
$YourEnquiry = Trim(stripslashes($_POST['YourEnquiry'])); 
$YourPostcode = Trim(stripslashes($_POST['YourPostcode'])); 

// validation
$validationOK=true;
if (Trim($EmailFrom)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "CompanyName: ";
$Body .= $CompanyName;
$Body .= "\n";
$Body .= "YourName: ";
$Body .= $YourName;
$Body .= "\n";
$Body .= "ContactTelephone: ";
$Body .= $ContactTelephone;
$Body .= "\n";
$Body .= "TypeofPlant: ";
$Body .= $TypeofPlant;
$Body .= "\n";
$Body .= "YourEnquiry: ";
$Body .= $YourEnquiry;
$Body .= "\n";
$Body .= "YourPostcode: ";
$Body .= $YourPostcode;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thank.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.html\">";
}
?>


<body>
</body>
</html>
