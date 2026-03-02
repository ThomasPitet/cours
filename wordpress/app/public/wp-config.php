<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '<xFow+|=/0`&jXGnz>K@(707[CE.E!?ixfY!8`XDeJ4s4005*}=6m`(@At.z;40^' );
define( 'SECURE_AUTH_KEY',   'wV|6z4B?~qOy6vOjL41=bYsZu$L@=CmnPQ#%h-H~PtrEB!,i=J5fr3St*f@E(G%Y' );
define( 'LOGGED_IN_KEY',     'YIKuuR*=H/6O&p,DhSU4{J+Up^?dx;aT2!U%|DK>e!SLgYGGy>r)6(VPesmi$YCh' );
define( 'NONCE_KEY',         '},#8@|:Tcc4x^&K83Ga5sm=Kg9/2A[{PLG6xC2Lq6;xNn7D-sh;2_pf!Y!k<Jc=<' );
define( 'AUTH_SALT',         'F)3gMKd|0dGPJ]-(*O}^Q*7&Q^m|pym(HQt48m1Sq4<umQ>SkyC?00/H>PmXK^4{' );
define( 'SECURE_AUTH_SALT',  'S:F1c%c!>aSS J(^@vZRcX!PQ`-(zM^T7NS$5,}|m#M}f%QeZ|7d<^l<SNpr@5L.' );
define( 'LOGGED_IN_SALT',    '0x}Wz=ga8600F:K=*=:a[2Y-JUTcI$EevvLC+X1vX=&*XZ05Yd^AFCs<ac8mz8c|' );
define( 'NONCE_SALT',        '&BL*dA*uG+YJ3-Ik:FX`uQ?]O|)Avsd5e%30S*sjA+x01Rf>xMmnti G{iQFKbk1' );
define( 'WP_CACHE_KEY_SALT', '[p`lmj_<9#6$7x8~nV~@CC{-J([~i_EAL|n)LuE.C%Lj=gE;*MHJxxgyTQ|3t6;f' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
