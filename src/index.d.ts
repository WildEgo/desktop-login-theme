// Type definitions for lightdm-webkit2-greeter from [WebGreeter](https://github.com/Antergos/web-greeter)
// Project: LightDM
// Definitions by: Ole Martin Ruud <https://github.com/barskern>
// Modified version of: https://github.com/barskern/lightdm-webkit2-typescript/ will hopefully get removed if not I'll just extend it.

declare namespace LightDM {
  /**
   * Base class for the greeter's Theme JavaScript API. Greeter themes will interact
   * directly with an object derived from this class to facilitate the user log-in process.
   * The greeter will automatically create an instance when it starts.
   * The instance can be accessed using the global variable: [`lightdm`](#dl-window-lightdm).
   *
   * @memberOf LightDM
   */
  interface Greeter {
    /**
     * The username of the user being authenticated or {@link null}
     * if there is no authentication in progress.
     * @type {string | null}
     * @readonly
     */
    authentication_user: string | null;

    /**
     * Whether or not the guest account should be automatically logged
     * into when the timer expires.
     * @type {boolean}
     * @readonly
     */
    autologin_guest: boolean;

    /**
     * The number of seconds to wait before automatically logging in.
     * @type {number}
     * @readonly
     */
    autologin_timeout: number;

    /**
     * The username with which to automatically log in when the timer expires.
     * @type {string}
     * @readonly
     */
    autologin_user: string;

    /**
     * Whether or not the greeter can make the system hibernate.
     * @type {boolean}
     * @readonly
     */
    can_hibernate: boolean;

    /**
     * Whether or not the greeter can make the system restart.
     * @type {boolean}
     * @readonly
     */
    can_restart: boolean;

    /**
     * Whether or not the greeter can make the system shutdown.
     * @type {boolean}
     * @readonly
     */
    can_shutdown: boolean;

    /**
     * Whether or not the greeter can make the system suspend/sleep.
     * @type {boolean}
     * @readonly
     */
    can_suspend: boolean;

    /**
     * The name of the default session.
     * @type {string}
     * @readonly
     */
    default_session: string;

    /**
     * Whether or not guest sessions are supported.
     * @type {boolean}
     * @readonly
     */
    has_guest_account: boolean;

    /**
     * Whether or not user accounts should be hidden.
     * @type {boolean}
     * @readonly
     */
    hide_users: boolean;

    /**
     * The system's hostname.
     * @type {string}
     * @readonly
     */
    hostname: string;

    /**
     * Whether or not the greeter is in the process of authenticating.
     * @type {boolean}
     * @readonly
     */
    in_authentication: boolean;

    /**
     * Whether or not the greeter has successfully authenticated.
     * @type {boolean}
     * @readonly
     */
    is_authenticated: boolean;

    /**
     * A list of languages to present to the user.
     * @type {LightDM.Language | null}
     * @readonly
     */
    language: LightDM.Language | null;

    /**
     * A list of languages to present to the user.
     * @type {LightDM.Language[]}
     * @readonly
     */
    languages: Array<LightDM.Language>;

    /**
     * The currently active layout for the selected user.
     * @type {LightDM.Layout}
     * @readonly
     */
    layout: LightDM.Layout;

    /**
     * A list of keyboard layouts to present to the user.
     * @type {LightDM.Layout[]}
     * @readonly
     */
    layouts: Array<LightDM.Layout>;

    /**
     * Whether or not the greeter was started as a lock screen.
     * @type {boolean}
     * @readonly
     */
    lock_hint: boolean;

    /**
     * Whether or not the guest account should be selected by default.
     * @type {boolean}
     * @readonly
     */
    select_guest_hint: boolean;

    /**
     * The username to select by default.
     * @type {string}
     * @readonly
     */
    select_user_hint: string;

    /**
     * List of available sessions.
     * @type {LightDM.Session[]}
     * @readonly
     */
    sessions: Array<LightDM.Session>;

    /**
     * List of available users.
     * @type {LightDM.User[]}
     * @readonly
     */
    users: Array<LightDM.User>;

    /**
     * Starts the authentication procedure for a user.
     *
     * @arg {String | null} username A username or {@link null} to prompt for a username.
     * @param username
     */
    authenticate(username?: string | null): void;

    /**
     * Starts the authentication procedure for the guest user.
     */
    authenticate_as_guest(): void;

    /**
     * Cancel the user authentication that is currently in progress.
     */
    cancel_authentication(): void;

    /**
     * Cancel the automatic login.
     */
    cancel_autologin(): void;

    /**
     * Triggers the system to hibernate.
     * @returns {boolean} Returns {@link true} if hibernation initiated, otherwise {@link false}
     * @return
     */
    hibernate(): boolean;

    /**
     * Provide a response to a prompt.
     * @arg {*} response
     * @param response
     */
    respond(response: any): void;

    /**
     * Triggers the system to restart.
     * @returns {boolean} Returns {@link true} if restart initiated, otherwise {@link false}
     * @return
     */
    restart(): boolean;

    /**
     * Set the language for the currently authenticated user.
     * @arg {string} language The language in the form of a locale specification (e.g. 'de_DE.UTF-8')
     * @returns {boolean} Returns {@link true} if successful, otherwise {@link false}
     * @param language
     * @return
     */
    set_language(language: string): boolean;

    /**
     * Triggers the system to shutdown.
     * @returns {boolean} Returns {@link true} if shutdown initiated, otherwise {@link false}
     * @return
     */
    shutdown(): boolean;

    /**
     * Start a session for the authenticated user.
     * @arg {string | LightDM.Session.key | null} session The session to log into or {@link null} to use the default.
     * @returns {boolean} Returns {@link true} if successful, otherwise {@link false}
     * @param session
     * @return
     */
    start_session(session?: string | null): boolean;

    /**
     * Triggers the system to suspend/sleep.
     * @returns {boolean} Returns {@link true} if suspend/sleep initiated, otherwise {@link false}
     * @return
     */
    suspend(): boolean;
  }

  /**
   * Provides greeter themes with a way to access values from the greeter's config
   * file located at `/etc/lightdm/lightdm-webkit2-greeter.conf`. The greeter will
   * create an instance of this class when it starts. The instance can be accessed
   * with the global variable: [`greeter_config`](#dl-window-greeter_config).
   *
   * @memberOf LightDM
   */
  interface GreeterConfig {
    /**
     * ***Deprecated!*** Access config sections directly as properties of this object instead.
     *
     * @deprecated
     *
     * @arg {string} config_section
     * @arg {string} key
     *
     * @returns {boolean} Config value for `key`.
     * @param config_section
     * @param key
     * @return
     */
    get_bool(config_section: string, key: string): boolean;

    /**
     * ***Deprecated!*** Access config sections directly as properties of this object instead.
     *
     * @deprecated
     *
     * @arg {string} config_section
     * @arg {string} key
     *
     * @returns {number} Config value for `key`.
     * @param config_section
     * @param key
     * @return
     */
    get_num(config_section: string, key: string): number;

    /**
     * ***Deprecated!*** Access config sections directly as properties of this object instead.
     *
     * @deprecated
     *
     * @arg {string} config_section
     * @arg {string} key
     *
     * @returns {string} Config value for `key`.
     * @param config_section
     * @param key
     * @return
     */
    get_str(config_section: string, key: string): string;

    /**
     * Object with configuration from configuration-file of the subsection [branding]
     * @type {object}
     * @readonly
     */
    branding: /* _branding */ object;

    /**
     * Object with configuration from configuration-file of the subsection [greeter]
     * @type {object}
     * @readonly
     */
    greeter: /* _greeter */ object;
  }

  /**
   * Interface for object that holds info about a session. Session objects are not
   * created by the theme's code, but rather by the [`LightDM.Greeter`](#dl-LightDM-Greeter) class.
   *
   * @memberOf LightDM
   */
  interface Session {
    /**
     * The name for the session.
     * @type {string}
     * @readonly
     */
    name: string;

    /**
     * The key for the session.
     * @type {string}
     * @readonly
     */
    key: string;

    /**
     * The comment for the session.
     * @type {string}
     * @readonly
     */
    comment: string;
  }

  /**
   * Interface for object that holds info about a language on the system. Language objects are not
   * created by the theme's code, but rather by the [`LightDM.Greeter`](#dl-LightDM-Greeter) class.
   *
   * @memberOf LightDM
   */
  interface Language {
    /**
     * The code for the language.
     * @type {string}
     * @readonly
     */
    code: string;

    /**
     * The name for the layout.
     * @type {string}
     * @readonly
     */
    name: string;

    /**
     * The territory for the language.
     * @type {string}
     * @readonly
     */
    territory: string;
  }

  /**
   * Interface for object that holds info about a keyboard layout on the system. Language
   * objects are not created by the theme's code, but rather by the [`LightDM.Greeter`](#dl-LightDM-Greeter) class.
   *
   * @memberOf LightDM
   */
  interface Layout {
    /**
     * The description for the layout.
     * @type {string}
     * @readonly
     */
    description: string;

    /**
     * The name for the layout.
     * @type {string}
     * @readonly
     */
    name: string;

    /**
     * The territory for the layout.
     * @type {string}
     * @readonly
     */
    short_description: string;
  }

  /**
   * Interface for object that holds info about a user account on the system. User
   * objects are not created by the theme's code, but rather by the [`LightDM.Greeter`](#dl-LightDM-Greeter) class.
   *
   * @memberOf LightDM
   */
  interface User {
    /**
     * The display name for the user.
     * @type {string}
     * @readonly
     */
    display_name: string;

    /**
     * The background for the user.
     * @type {string}
     * @readonly
     */
    background: string;

    /**
     * The language for the user.
     * @type {string}
     * @readonly
     */
    language: string;

    /**
     * The keyboard layout for the user.
     * @type {string}
     * @readonly
     */
    layout: string;

    /**
     * The image for the user.
     * @type {string}
     * @readonly
     */
    image: string;

    /**
     * The home_directory for the user.
     * @type {string}
     * @readonly
     */
    home_directory: string;

    /**
     * The username for the user.
     * @type {string}
     * @readonly
     */
    username: string;

    /**
     * Whether or not the user is currently logged in.
     * @type {boolean}
     * @readonly
     */
    logged_in: boolean;

    /**
     * The last session that the user logged into.
     * @type {string | null}
     * @readonly
     */
    session: string | null;
  }

  /**
   * Provides various utility methods for use in greeter themes. The greeter will automatically
   * create an instance of this class when it starts. The instance can be accessed
   * with the global variable: [`theme_utils`](#dl-window-theme_utils).
   *
   * @memberOf LightDM
   */
  interface ThemeUtils {
    /**
     * Binds `this` to class, `context`, for all of the class's methods.
     *
     * @arg {object} context An ES6 class instance with at least one method.
     *
     * @return {object} `context` with `this` bound to it for all of its methods.
     * @param context
     * @return
     */
    bind_this(context: object): any;

    /**
     * Returns the contents of directory found at `path` provided that the (normalized) `path`
     * meets at least one of the following conditions:
     *   - Is located within the greeter themes' root directory.
     *   - Has been explicitly allowed in the greeter's config file.
     *   - Is located within the greeter's shared data directory (`/var/lib/lightdm-data`).
     *   - Is located in `/tmp`.
     *
     * @param {string} path The abs path to desired directory.
     *
     * @returns {string[]} List of abs paths for the files and directories found in `path`.
     * @param path
     * @return
     */
    dirlist(path: string): Array<string>;

    /**
     * Escape HTML entities in a string.
     *
     * @param {string} text The text to be escaped.
     *
     * @returns {string}
     * @param text
     * @return
     */
    esc_html(text: string): string;

    /**
     * Get the current time in a localized format. Time format and language are auto-detected
     * by default, but can be set manually in the greeter config file.
     *   - `language` defaults to the system's language, but can be set manually in the config file.
     *   - When `time_format` config file option has a valid value, time will be formatted
     *     according to that value.
     *   - When `time_format` does not have a valid value, the time format will be `LT`
     *     which is `1:00 PM` or `13:00` depending on the system's locale.
     *
     * @return {string} The current localized time.
     * @return
     */
    get_current_localized_time(): string;

    /**
     * Use {@link window.theme_utils.esc_html()} instead.
     *
     * @deprecated
     * @param text
     * @return
     */
    txt2html(text: string): string;
  }
}

/**
 * Global instantiated object containing the Greeter.
 * @type {object}
 * @readonly
 */
declare const lightdm: LightDM.Greeter;

/**
 * ***Deprecated!*** Use {@link greeter_config} instead
 * Global instance of GreeterConfig instantiated by the greeter.
 * Contains values from the config file at `/etc/lightdm/lightdm-webkit2-greeter.conf`
 * @deprecated
 * @type {object}
 * @readonly
 */
declare const config: LightDM.GreeterConfig;

/**
 * Global instance of GreeterConfig instantiated by the greeter.
 * Contains values from the config file at `/etc/lightdm/lightdm-webkit2-greeter.conf`
 * @type {object}
 * @readonly
 */
declare const greeter_config: LightDM.GreeterConfig;

/**
 * Global instance of ThemeUtils instantiated by the greeter
 * @type {object}
 * @readonly
 */
declare const theme_utils: LightDM.ThemeUtils;

/**
 * ***Deprecated!*** Use {@link theme_utils} instead
 * Global instance of ThemeUtils instantiated by the greeter
 * @deprecated
 * @type {object}
 * @readonly
 */
declare const greeterutil: LightDM.ThemeUtils;
