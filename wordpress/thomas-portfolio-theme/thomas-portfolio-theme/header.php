<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header class="site-header" id="site-header">
        <div class="site-container">

            <div class="site-branding">
                <a href="<?php echo esc_url(home_url('/')); ?>#accueil" class="site-name">
                    Thomas<span>Pitet</span>
                </a>
            </div>

            <nav class="main-navigation" id="main-nav" aria-label="Menu principal">
                <?php

                if (has_nav_menu('primary')) :
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => '',
                        'fallback_cb'    => false,
                        'walker'         => null,
                    ]);
                else : ?>
                    <ul>
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#objectifs">Objectifs</a></li>
                        <li><a href="#projets">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                <?php endif; ?>
            </nav>
            <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Ouvrir le menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
    </header>