import { ExpectedConditions } from "protractor";

/*global $, browser, By */

export class LoginForm {

	get loginInput() {
        browser.wait(ExpectedConditions.elementToBeClickable($('#mat-input-3')), 5000, "Login field is not visible on the login page.")
		return $('#mat-input-3');
	}

	get passwordInput() {
        browser.wait(ExpectedConditions.elementToBeClickable($('#mat-input-4')), 5000, "Password field is not visible on the login page.")
		return $('#mat-input-4');
	}

	get submitButton() {
        browser.wait(ExpectedConditions.elementToBeClickable($('[type="submit"]')), 5000, "Submit button is not clickable on the login page.")
		return $('[type="submit"]');
    }
    get logoImage() {
        browser.wait(ExpectedConditions.elementToBeClickable($('img.logo')), 10000, "Logo is not clickable on the login page.")
		return $('img.logo');
    }
}

export function signUpFormIsPresent() {
	return $('#loginform').isPresent();
}