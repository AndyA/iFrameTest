<?php
  $post_id = $_GET["id"];
  if (!isset($post_id)) $post_id = 10024;
 ?>
<!DOCTYPE html>
<html>
  <head>
    <title>River Radio Embed</title>
    <script src="//code.jquery.com/jquery-2.2.4.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>
  <body>
    <p>Let's imagine this is a site that wants to embed an NYC Downlow player. To
    embed post ID <?php echo $post_id ?> (for example) they'd use the following code:</p>

    <pre>
      <code>
  &lt;script 
    src="https://thenycdownlow.com/embed/embed.js" 
    type="text/javascript"
    data-river-embed="<?php echo $post_id ?>"&gt;&lt;/script&gt;
      </code>
    </pre>

    <p>Which would give them an embedded player like this:</p>
    
    <script 
      src="https://thenycdownlow.com/embed/embed.js" 
      type="text/javascript"
      data-river-embed="<?php echo $post_id ?>"></script>

    <p>The player styling is currently hardwired but can be changed to
       suit e.g. Resident Advisor</p>

  </body>
</html>

