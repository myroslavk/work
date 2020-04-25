/*gloal $, browser*/
import { LoginForm } from './LoginForm.js';
import { config } from '../../dev.conf.js';


/**
 * Sign Up user
 * @param username
 * @param password
 * @returns {*}
 * @constructor
 */
export function Login(username, password) {
    let loginForm = new LoginForm();
    

    browser.get(config.baseUrl);
	expect(loginForm.loginInput.isPresent()).toBe(true);
	loginForm.loginInput.clear();
	loginForm.loginInput.click().sendKeys(username);

	// and password
	loginForm.passwordInput.clear();
	loginForm.passwordInput.click().sendKeys(password);

	// submit form
    loginForm.submitButton.click();
    loginForm.logoImage.click();

}