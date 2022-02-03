<?php
    $host = "localhost";
    $user = "root";
    $password = '';
    $db= "login";

    $con = mysqli_connect($host, $user, $password, $db);
    mysqli_select_db($con,$db);

    if(isset($_POST['emailid'])){
      $email=$_POST['emailid'];
      $pass=$_POST['password'];

      $sql="select  * from users where emailid='".$email."'AND password='".$pass."'
      limit 1";
      $result=mysqli_query($con,$sql);

      if(mysqli_num_rows($result)==1){
        echo "Successfully Logged In";
        exit();
      }else{
        echo "Unsuccessfull";
        exit();
      }

    }

?>
