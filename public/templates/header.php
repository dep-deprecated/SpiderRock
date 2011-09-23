<!DOCTYPE HTML>
<!--[if IE 7 ]><html class="ie7"><![endif]-->
<!--[if IE 8 ]><html class="ie8"><![endif]-->
<!--[if IE 9 ]><html class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html><!--<![endif]-->
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head profile="http://gmpg.org/xfn/11">

  <title><?php wp_title( '-', true, 'right' ); echo wp_specialchars( get_bloginfo('name'), 1 ) ?></title>
  <meta http-equiv="content-type" content="<?php bloginfo('html_type') ?>; charset=<?php bloginfo('charset') ?>" />

  <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>

  <link href="/stylesheets/blueprint/screen.css" media="screen" rel="stylesheet" type="text/css" />
  <!--[if lt IE 8]>
    <link href="/stylesheets/blueprint/ie.css" media="screen" rel="stylesheet" type="text/css" />
  <![endif]-->
  <link href="/stylesheets/reset.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/layout.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/headerfooter.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/common.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/elements.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/sidebar.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/home.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/javascripts/fancybox/jquery.fancybox-1.3.4.css" media="screen" rel="stylesheet" type="text/css" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
  <script src="/javascripts/application.js"></script>
  <script src="/javascripts/fancybox/jquery.fancybox-1.3.4.js"></script>
  <script src="/javascripts/cookies.js"></script>

  <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">

  <?php wp_head() // For plugins ?>
  <link rel="alternate" type="application/rss+xml" href="<?php bloginfo('rss2_url') ?>" title="<?php printf( __( '%s latest posts', 'sandbox' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
  <link rel="alternate" type="application/rss+xml" href="<?php bloginfo('comments_rss2_url') ?>" title="<?php printf( __( '%s latest comments', 'sandbox' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
  <link rel="pingback" href="<?php bloginfo('pingback_url') ?>" />

</head>

<body class="<?php sandbox_body_class() ?>">
  <div id="box_button" onclick="$('#login_box').fadeIn();$('#username').focus(); return false;$"><img src="/images/chrome/buttons/client_login_button.png" border="0" /></div>
  <div id="login_box">
    <div class="close_box" onclick="$('#login_box').hide();">x</div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
    <p class="error" id="error_msg"></p>
    <input type="button" value="Log in" id="login_button" />
  </div>
  <div id="success_box" style="display:none">
    success!
  </div>
  <div id="wrapper" class="container">
    <div class="span-24 header">
      <h1><a href="<?php bloginfo('home') ?>/"><?php bloginfo('name') ?></a></h1>
    </div>
    <? //php bloginfo('description') ?>
    <div id="access" style="display:none">
      <div class="skip-link"><a href="#content" title="<?php _e( 'Skip to content', 'sandbox' ) ?>"><?php _e( 'Skip to content', 'sandbox' ) ?></a></div>
      <?php sandbox_globalnav() ?>
    </div>
