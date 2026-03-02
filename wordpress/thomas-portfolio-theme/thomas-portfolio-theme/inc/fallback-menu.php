<?php
function thomas_fallback_menu()
{
    $sections = [
        '#accueil'   => 'Accueil',
        '#apropos'   => 'À propos',
        '#objectifs' => 'Objectifs',
        '#projets'   => 'Projets',
        '#contact'   => 'Contact',
    ];

    echo '<nav role="navigation" aria-label="Navigation principale"><ul id="primary-menu">';
    foreach ($sections as $href => $label) {
        echo '<li><a href="' . esc_attr($href) . '">' . esc_html($label) . '</a></li>';
    }
    echo '</ul></nav>';
}
