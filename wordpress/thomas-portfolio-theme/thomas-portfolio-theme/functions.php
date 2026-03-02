<?php
defined('ABSPATH') || exit;

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(600, 360, true);
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);
    register_nav_menus([
        'primary' => __('Menu principal (One-Page)', 'thomas-portfolio'),
    ]);
});

add_action('wp_enqueue_scripts', function () {

    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'thomas-portfolio-style',
        get_stylesheet_uri(),
        ['google-fonts'],
        wp_get_theme()->get('Version')
    );


    wp_enqueue_script(
        'thomas-portfolio-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        wp_get_theme()->get('Version'),
        true
    );

    wp_localize_script('thomas-portfolio-main', 'thomasTheme', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('thomas_nonce'),
    ]);
});


add_action('init', function () {
    register_post_type('projet', [
        'labels' => [
            'name'          => __('Projets', 'thomas-portfolio'),
            'singular_name' => __('Projet', 'thomas-portfolio'),
            'add_new_item'  => __('Ajouter un projet', 'thomas-portfolio'),
            'edit_item'     => __('Modifier le projet', 'thomas-portfolio'),
            'all_items'     => __('Tous les projets', 'thomas-portfolio'),
            'not_found'     => __('Aucun projet trouvé.', 'thomas-portfolio'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-editor-code',
        'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'rewrite'      => ['slug' => 'projet'],
    ]);
});


add_action('add_meta_boxes', function () {
    add_meta_box(
        'projet_details',
        __('Détails du projet', 'thomas-portfolio'),
        'thomas_projet_meta_box_html',
        'projet',
        'side'
    );
});

function thomas_projet_meta_box_html($post)
{
    $github = get_post_meta($post->ID, '_projet_github', true);
    $tag    = get_post_meta($post->ID, '_projet_tag', true);
    wp_nonce_field('thomas_save_projet_meta', 'thomas_projet_nonce');
?>
    <p>
        <label for="projet_github"><strong>URL GitHub</strong></label><br>
        <input type="url" id="projet_github" name="projet_github"
            value="<?php echo esc_attr($github); ?>" style="width:100%">
    </p>
    <p>
        <label for="projet_tag"><strong>Tag / Technologie</strong></label><br>
        <input type="text" id="projet_tag" name="projet_tag"
            value="<?php echo esc_attr($tag); ?>" style="width:100%"
            placeholder="ex: JavaScript, Java, C…">
    </p>
<?php
}

add_action('save_post_projet', function ($post_id) {
    if (
        ! isset($_POST['thomas_projet_nonce'])
        || ! wp_verify_nonce($_POST['thomas_projet_nonce'], 'thomas_save_projet_meta')
    ) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (! current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['projet_github'])) {
        update_post_meta($post_id, '_projet_github', esc_url_raw($_POST['projet_github']));
    }
    if (isset($_POST['projet_tag'])) {
        update_post_meta($post_id, '_projet_tag', sanitize_text_field($_POST['projet_tag']));
    }
});


add_action('wp_ajax_nopriv_thomas_contact', 'thomas_handle_contact');
add_action('wp_ajax_thomas_contact',        'thomas_handle_contact');

function thomas_handle_contact()
{
    check_ajax_referer('thomas_nonce', 'nonce');

    $name    = sanitize_text_field($_POST['name']    ?? '');
    $email   = sanitize_email($_POST['email']   ?? '');
    $subject = sanitize_text_field($_POST['subject'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    if (! $name || ! is_email($email) || ! $subject || ! $message) {
        wp_send_json_error(['msg' => 'Veuillez remplir tous les champs correctement.']);
    }

    $to      = get_option('admin_email');
    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        'From: '     . $name  . ' <' . $email . '>',
        'Reply-To: ' . $email,
    ];

    $sent = wp_mail($to, '[Portfolio] ' . $subject, $message, $headers);

    if ($sent) {
        wp_send_json_success(['msg' => 'Votre message a bien été envoyé !']);
    } else {
        wp_send_json_error(['msg' => "Erreur lors de l'envoi. Veuillez réessayer."]);
    }
}
