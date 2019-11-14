<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'manageScl_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~^fL0;hL?VNR:&,k=Y}D%-?~Cqvhz2iH#/Tq8e_ky#W9OF^.^nx RgMk5KR:hpd.' );
define( 'SECURE_AUTH_KEY',  'q>pqya]5:9W{6R/wPWrYJH^/kVc>&9sy^qt7QE{Y{~PgOQeYADewIN;~-M`$G%I>' );
define( 'LOGGED_IN_KEY',    '3eUb6[+#Q2 90]oVZ9h43b!Llb=oz5nUlFB+#~0f<jn%4Vpm;!P@|Ax`m7I(4|hR' );
define( 'NONCE_KEY',        'BPe:t(CsL0vFD[jB?Hi 3]Y:;OP{_jaaC0,NY4zHCFYu>Py5J&C:QmrHVCmPAigP' );
define( 'AUTH_SALT',        'P<hi/F/VS[XZV;x<!= -~njHVx_$l3_IVx*~SUzTxeoXRvAO,zUNfdrQA^3so9py' );
define( 'SECURE_AUTH_SALT', 'N1$]P]>a@V&mxTRzGS9pLqIkVrV./*C3@LvP( oe[B@^@x0;[ZEX:o[<x;42%P$g' );
define( 'LOGGED_IN_SALT',   'c9W}CQi@p-fb0]$`1{&>+1(9Dgc2@Occc2#7039<VY?e55v9!qr3kqB}pW$[lS*6' );
define( 'NONCE_SALT',       'VMR8[X Mz?B~_tPtvV=O`ebVdEY,#E`RA+P3ef}a]: B:NfRm<~TxH&).Ul9|Pe4' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
