<?php

$servername = 'localhost';
$username   = 'oiokoo';
$password   = 'Tree3868#';
$dbname     = 'oiokoo';

$conn = mysqli_connect($servername,$username,$password,$dbname);
mysqli_set_charset($conn, 'utf8');

if( !$conn){
    die('connet fail');
}

$email = $_POST['email']; //폼 정보 변수 설정 

$sql = "insert into email_table (email) values('$email')"; //테이블내 입력
$result = mysqli_query($conn,$sql);

echo '<p>메일 리스트가 저장되었습니다.</p>'.'<br>'.$email;

mysqli_close($conn);

?>