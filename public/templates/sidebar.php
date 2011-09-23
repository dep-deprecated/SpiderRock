<div class="span-6 sidebar">
  <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar(1) ) : // begin primary sidebar widgets ?>
    <?php wp_list_pages('title_li=&sort_column=menu_order' ) ?>
    <ul class="navigation">
      <li class="nav_heading"><?php _e( 'Categories', 'sandbox' ) ?></li>
      <?php wp_list_categories('title_li=&show_count=0&hierarchical=1') ?>
    </ul>
    <ul class="navigation">
      <li class="nav_heading"><?php _e( 'Archives', 'sandbox' ) ?></li>
      <?php wp_get_archives('type=monthly') ?>
    </ul>
  <?php endif; // end primary sidebar widgets  ?>
</div>
