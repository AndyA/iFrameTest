<?php
  $post_id = $_GET["id"];
  if (!isset($post_id)) $post_id = 10024;
  $embed = "https://thenycdownlow.com/embed/embed.js";
 ?>
<!DOCTYPE html>
<html>
  <head>
    <title>River Radio Embed</title>
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
    src="<?php echo $embed ?>" 
    type="text/javascript"
    data-river-embed="<?php echo $post_id ?>"&gt;&lt;/script&gt;
      </code>
    </pre>

    <p>Which would give them an embedded player like this:</p>
    
    <script 
      src="<?php echo $embed ?>" 
      type="text/javascript"
      data-river-embed="<?php echo $post_id ?>"></script>

    <p>The player styling is currently hardwired but can be changed to
       suit e.g. Resident Advisor</p>

  </body>
</html>

