<!DOCTYPE html>
<html lang="UTF-8">
<?php
require 'php/vars.php';
$siteKey = SITEKEY;
?>

    <head>
        <meta charset="UTF-8">
        <title>手話ダンス教室 スマイル お問い合わせ</title>
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="/js/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="/js/footerFixed.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    </head>

    <body>
        <header class="header">
            <ul class="header_logo">
                <li>
                    <a href="https://smile-sign.com/index.html"><img src="/images/logo.svg"></a>
                </li>
                <li>
                    <a href="https://smile-sign.com/index.html">
                        <p>手話ダンス スマイル</p>
                    </a>
                </li>
            </ul>
        </header>
        <div class="contentsArea">
            <div class="formTitle">
                <h2>お問い合わせ</h2>
            </div>
            <form action="php/recaptcha.php" method="post" class="form" id="rc_form">
                <label for="name">お名前</label>
                <input type="text" name="name" class="form_input" placeholder="例:山田　太郎" autofocus required autocomplete="name">

                <label for="email">メールアドレス</label>
                <input type="email" name="email" class="form_input" placeholder="例:smile-sign@example.com" autofocus required autocomplete="email">

                <label for="text">お問い合わせ内容</label>
                <textarea name="text" class="form_input" autofocus required style="height: 200px; "></textarea>

                <div class="form_privacy ">
                    <p>ご入力頂いた個人情報は、お問い合わせ内容の返信以外に利用しません。</p>
                </div>
                <div class="form_submit ">
                    <button type="submit " class="form_submit_btn ">送信</button>
                </div>
            </form>
            <script src="https://www.google.com/recaptcha/api.js?render=<?php echo $siteKey; ?>"></script>
            <script>
                var rc_form = document.getElementById('rc_form');
                rc_form.onsubmit = function(event) {
                    event.preventDefault();

                    grecaptcha.ready(function() {
                        grecaptcha.execute('<?php echo $siteKey; ?>', {
                            action: 'inspection'
                        }).then(function(token) {
                            var token_input = document.createElement('input');
                            token_input.type = 'hidden';
                            token_input.name = 'g-recaptcha-response';
                            token_input.value = token;
                            rc_form.appendChild(token_input);
                            var action_input = document.createElement('input');
                            action_input.type = 'hidden';
                            action_input.name = 'action';
                            action_input.value = 'inspection';
                            rc_form.appendChild(action_input);
                            rc_form.submit();
                        });
                    });
                }
            </script>

            <div class="recaptcha">
                <p>
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                </p>
            </div>
        </div>
        <footer class="footer" id="footer">
            <ul class="footer_list">
                <li>
                    <a href="https://smile-sign.com/index.html">
                        <img src="images/logo.svg">
                    </a>
                </li>
                <li>
                    <p>© 2022 手話ダンス スマイル All rights reserved.</p>
                </li>
            </ul>
        </footer>
    </body>