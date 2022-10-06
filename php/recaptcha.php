<?php
require 'vars.php';
$siteKey = SITEKEY;
$secretKey = SECRETKEY;
$fromEmail = FROM_EMAIL;
$myEmail = MY_EMAIL;
$myName = MY_NAME;

$token = isset($_POST['g-recaptcha-response'])?$_POST['g-recaptcha-response']:NULL;
$action = isset($_POST['action'])?$_POST['action']:NULL;

if($token && $action) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array(
		'secret' => $secretKey,
		'response' => $token
	)));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$api_response = curl_exec($ch);
	curl_close($ch);
	$result = json_decode($api_response);

	if($result -> success && $result -> action === $action && $result -> score >= 0.5) {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$text = $_POST["text"];

        mb_language("ja");
		mb_internal_encoding("UTF-8");


			$subject = "お問い合わせを受け付けました";

			$body = <<< EOM
			{$name} 様

			※このメールはシステムからの自動返信です。
			※本メールにお心当たりがない場合は破棄してください。
			
			お問い合わせありがとうございます。
			以下の内容で受け付けました。

			===================================================
			お名前
			{$name}

			メールアドレス
			{$email}
			
			お問い合わせ内容
			{$text}
			===================================================

			通常3日以内にご連絡しますので、今しばらくお待ちくださいませ。
			手話ダンススマイル
			EOM;

			$subBody = <<< EOM
			新規お問い合わせ
			===================================================
			お名前
			{$name}

			メールアドレス
			{$email}

			お問い合わせ内容
			{$text}
			===================================================
			EOM;

			$header = "From:"  .mb_encode_mimeheader($fromName) ."<{$fromEmail}>\r\n";
			$subHeader = "From:"  .mb_encode_mimeheader($name) ."<{$fromEmail}>\r\n";
			$param = "-f no-reply@smile-sign.com";

			mb_send_mail($email, $subject, $body, $header, $param);
			mb_send_mail($myEmail, $subject, $subBody, $subHeader, $param);

			header("Location:../thanks.html");
			exit();
	}else {
		$alert = "<script type='text/javascript'>alert('reCAPTCHA認証に失敗しました。前のページに戻ってやり直してください。');</script>";
		echo $alert;
	}
}
?>
