<?php
get_header();
?>

<section id="accueil" class="section">
    <div class="site-container">

        <div class="hero-inner">
            <div class="hero-avatar">
                <img
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/thomas.jpg'); ?>"
                    alt="Photo de profil de Thomas Pitet"
                    width="160" height="160">
            </div>

            <div class="hero-text">
                <span class="subtitle">Portfolio</span>
                <h1>Thomas Pitet</h1>
                <p class="tagline">Le visuel est plus intéressant que la compréhension</p>
                <div class="hero-cta">
                    <a href="#projets" class="btn">Voir mes projets</a>
                    <a href="#contact" class="btn btn-outline">Me contacter</a>
                </div>
            </div>
        </div>

        <div class="bio-card">
            <h2>À propos</h2>
            <p>
                Pour commencer, j'ai obtenu mon brevet professionnel (mention assez bien).
                J'ai fait une courte expérience en CAP cuisine (4 mois) avant de me réorienter
                vers un bac STI2D, spécialité SIN, que j'ai obtenu.
            </p>
            <p>
                À ce jour, je suis en première année en développement fullstack pour poursuivre
                mon projet professionnel.
            </p>
        </div>

    </div>
</section>

<section id="competences" class="section">
    <div class="site-container">

        <h2 class="section-title">Compétences</h2>

        <div class="skills-grid">
            <?php
            $skills = ['C', 'HTML / CSS', 'PHP', 'JavaScript', 'SQL', 'Java'];
            foreach ($skills as $skill) : ?>
                <span class="skill-badge"><?php echo esc_html($skill); ?></span>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<section id="objectifs" class="section">
    <div class="site-container">

        <h2 class="section-title">Mes objectifs</h2>

        <div class="objectives-grid">

            <div class="objective-card">
                <h3>Professionnels</h3>
                <ul>
                    <li>Obtenir une alternance (2<sup>e</sup> et 3<sup>e</sup> année)</li>
                    <li>Décrocher mon Bachelor Fullstack</li>
                    <li>Travailler au Japon comme développeur frontend</li>
                    <li>Créer des sites web pour l'automobile et la moto</li>
                </ul>
            </div>

            <div class="objective-card">
                <h3>Personnels</h3>
                <ul>
                    <li>Obtenir mon permis voiture</li>
                    <li>Passer le permis moto A2 et acquérir une Yamaha MT-07</li>
                    <li>Faire du sport hebdomadaire</li>
                    <li>Développer mon application mobile</li>
                    <li>Apprendre le japonais</li>
                </ul>
            </div>

        </div>
    </div>
</section>

<section id="projets" class="section">
    <div class="site-container">

        <h2 class="section-title">Mes projets</h2>

        <div class="projects-grid">
            <?php
            $projets_query = new WP_Query([
                'post_type'      => 'projet',
                'posts_per_page' => -1,
                'orderby'        => 'menu_order',
                'order'          => 'ASC',
            ]);

            if ($projets_query->have_posts()) :

                while ($projets_query->have_posts()) :
                    $projets_query->the_post();

                    $github = get_post_meta(get_the_ID(), '_projet_github', true);
                    $tag    = get_post_meta(get_the_ID(), '_projet_tag', true);
            ?>
                    <article class="project-card">

                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('medium', ['class' => 'project-card-img']); ?>
                        <?php endif; ?>

                        <div class="project-card-body">
                            <?php if ($tag) : ?>
                                <span class="project-card-tag"><?php echo esc_html($tag); ?></span>
                            <?php endif; ?>
                            <h3><?php the_title(); ?></h3>
                            <p><?php the_excerpt(); ?></p>
                        </div>

                        <div class="project-card-footer">
                            <?php if ($github) : ?>
                                <a href="<?php echo esc_url($github); ?>"
                                    target="_blank" rel="noopener noreferrer"
                                    class="btn">Voir le dépôt</a>
                            <?php endif; ?>
                        </div>

                    </article>
                <?php
                endwhile;
                wp_reset_postdata();

            else :
                $static_projects = [
                    [
                        'title'  => 'Numéro magique',
                        'tag'    => 'Java',
                        'desc'   => "Jeu où l'ordinateur choisit un nombre entre 0 et 100 ; à vous de le deviner grâce aux indices « trop haut / trop bas ».",
                        'github' => 'https://github.com/ThomasPitet/coda-bnv-num-ro-magique',
                        'img'    => get_template_directory_uri() . '/assets/images/num_magique.png',
                    ],
                    [
                        'title'  => 'Tic Tac Toe',
                        'tag'    => 'JavaScript',
                        'desc'   => "Adaptation du morpion : jouez contre l'ordinateur avec une interface simple et ludique.",
                        'github' => 'https://github.com/ThomasPitet/code-bnv-tic-tac-toe',
                        'img'    => get_template_directory_uri() . '/assets/images/tic1.png',
                    ],
                    [
                        'title'  => 'Sokoban',
                        'tag'    => 'Java',
                        'desc'   => 'Prototype Sokoban — puzzle logique où il faut pousser des caisses pour atteindre les objectifs.',
                        'github' => 'https://github.com/ThomasPitet/coda-bnv-sokoban',
                        'img'    => '',
                    ],
                ];

                foreach ($static_projects as $project) : ?>
                    <article class="project-card">

                        <?php if (! empty($project['img'])) : ?>
                            <img class="project-card-img"
                                src="<?php echo esc_url($project['img']); ?>"
                                alt="<?php echo esc_attr($project['title']); ?>">
                        <?php endif; ?>

                        <div class="project-card-body">
                            <span class="project-card-tag"><?php echo esc_html($project['tag']); ?></span>
                            <h3><?php echo esc_html($project['title']); ?></h3>
                            <p><?php echo esc_html($project['desc']); ?></p>
                        </div>

                        <div class="project-card-footer">
                            <a href="<?php echo esc_url($project['github']); ?>"
                                target="_blank" rel="noopener noreferrer"
                                class="btn">Voir le dépôt</a>
                        </div>

                    </article>
            <?php endforeach;
            endif;
            ?>
        </div>

    </div>
</section>

<section id="contact" class="section">
    <div class="site-container">

        <h2 class="section-title">Contactez-moi</h2>
        <p style="text-align:center; margin-top:-1.5rem; margin-bottom:2.5rem;">
            N'hésitez pas à me contacter pour toute opportunité ou question.
        </p>

        <div class="contact-wrapper">

            <div class="contact-info-box">
                <h3>Coordonnées directes</h3>

                <a href="tel:0670122844" class="contact-link">
                    <span class="icon"></span>
                    06 70 12 28 44
                </a>

                <a href="mailto:thomaspitet.pro@gmail.com" class="contact-link">
                    <span class="icon"></span>
                    thomaspitet.pro@gmail.com
                </a>

                <a href="https://github.com/ThomasPitet" target="_blank"
                    rel="noopener noreferrer" class="contact-link">
                    <span class="icon"></span>
                    GitHub — Thomas Pitet
                </a>
            </div>

            <div class="contact-form-box">
                <h3>Formulaire de contact</h3>

                <div id="contact-feedback" role="alert" aria-live="polite" style="display:none;"></div>

                <form id="contact-form" novalidate>
                    <?php wp_nonce_field('thomas_contact_form', 'contact_nonce'); ?>

                    <div class="form-group">
                        <label for="contact-name">Nom complet</label>
                        <input type="text" id="contact-name" name="name"
                            required placeholder="Votre nom">
                    </div>

                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="email" id="contact-email" name="email"
                            required placeholder="votre@email.com">
                    </div>

                    <div class="form-group">
                        <label for="contact-subject">Sujet</label>
                        <input type="text" id="contact-subject" name="subject"
                            required placeholder="Sujet de votre message">
                    </div>

                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="message"
                            required placeholder="Votre message..."></textarea>
                    </div>

                    <button type="submit" class="btn" id="contact-submit">
                        Envoyer le message
                    </button>
                </form>
            </div>

        </div>
    </div>
</section>

<?php get_footer(); ?>