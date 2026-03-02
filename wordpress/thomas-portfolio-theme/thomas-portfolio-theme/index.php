<?php
get_header();
?>

<main id="main-content" role="main">
    <div class="container" style="padding: 6rem 1.5rem 4rem;">
        <h1><?php the_title(); ?></h1>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="card" style="margin-top:2rem;">
                    <?php the_content(); ?>
                </div>
        <?php endwhile;
        endif; ?>
    </div>
</main>

<?php get_footer(); ?>