/**
 * main.js — Thomas Pitet Portfolio Theme
 *
 * 1. Header : ombre au scroll
 * 2. Menu mobile : hamburger toggle
 * 3. Fermeture du menu mobile au clic sur une ancre
 * 4. Formulaire de contact : soumission AJAX
 */

( function () {
    'use strict';

    // 1. HEADER : ombre progressive au scroll
    const header = document.getElementById( 'site-header' );
    if ( header ) {
        const onScroll = () => header.classList.toggle( 'scrolled', window.scrollY > 20 );
        window.addEventListener( 'scroll', onScroll, { passive: true } );
        onScroll();
    }

    // 2. MENU MOBILE : bouton hamburger
    const toggle = document.getElementById( 'nav-toggle' );
    const nav    = document.getElementById( 'main-nav' );

    if ( toggle && nav ) {
        toggle.addEventListener( 'click', () => {
            const isOpen = nav.classList.toggle( 'open' );
            toggle.classList.toggle( 'open', isOpen );
            toggle.setAttribute( 'aria-expanded', String( isOpen ) );
        } );

        // 3. Fermer sur clic d'ancre
        nav.querySelectorAll( 'a[href^="#"]' ).forEach( link => {
            link.addEventListener( 'click', () => {
                nav.classList.remove( 'open' );
                toggle.classList.remove( 'open' );
                toggle.setAttribute( 'aria-expanded', 'false' );
            } );
        } );
    }

    // 4. FORMULAIRE DE CONTACT — AJAX
    const form     = document.getElementById( 'contact-form' );
    const feedback = document.getElementById( 'contact-feedback' );
    const submit   = document.getElementById( 'contact-submit' );

    if ( form && feedback && typeof thomasTheme !== 'undefined' ) {
        form.addEventListener( 'submit', async ( e ) => {
            e.preventDefault();
            submit.disabled    = true;
            submit.textContent = 'Envoi en cours…';

            const data = new FormData( form );
            data.append( 'action', 'thomas_contact' );
            data.append( 'nonce',  thomasTheme.nonce );

            try {
                const response = await fetch( thomasTheme.ajaxUrl, { method: 'POST', body: data } );
                const json = await response.json();

                feedback.style.cssText = 'display:block;padding:.75rem 1rem;border-radius:6px;margin-bottom:1.25rem;';
                if ( json.success ) {
                    feedback.textContent = json.data.msg;
                    feedback.style.background = '#e6f4ea';
                    feedback.style.color      = '#1a5c30';
                    feedback.style.border     = '1px solid #a8d5b5';
                    form.reset();
                } else {
                    feedback.textContent = json.data.msg;
                    feedback.style.background = '#fdecea';
                    feedback.style.color      = '#8b0000';
                    feedback.style.border     = '1px solid #f5a5a5';
                }
            } catch ( err ) {
                feedback.style.cssText = 'display:block;padding:.75rem 1rem;background:#fdecea;color:#8b0000;';
                feedback.textContent   = "Une erreur réseau s'est produite. Veuillez réessayer.";
            } finally {
                submit.disabled    = false;
                submit.textContent = 'Envoyer le message';
            }
        } );
    }

} )();
