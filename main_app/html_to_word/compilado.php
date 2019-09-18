
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Reporte por instancia</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
<script src="../verTodosPlanes.js" charset="utf-8"></script>
<script src="../../vendor/bootstrap-4.1/js\bootstrap.min.js" charset="utf-8"></script>
</head>

<body>
<style media="screen">
#instancia{
  display: none;
}
</style>
</div>
<span style="margin-top:150px;"> </span>
<div id="arriba">

</div>
<script type="text/javascript">
  $("#arriba").append("<a id='exportar' class='word-export' href='javascript:void(0)'>GENERAR DOCUMENTO <img src='../../img/word.png'> </a>")
</script>
  <div id="container" class="mx-auto" style="width: 1200px;">
  <div id="page-content">

  </div>
</div>
  <div id="mensaje">

  </div>
<a id='exportar' class='word-export' href='javascript:void(0)'>GENERAR DOCUMENTO <img src='../../img/word.png'> </a>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="FileSaver.js"></script>
<script src="jquery.wordexport.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function($) {
        $("a.word-export").click(function(event) {
            $("#page-content").wordExport();
        });
    });
    </script>
</body>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</html>
