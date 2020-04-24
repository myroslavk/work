import { SignUp } from './app/SignUp.js';
import { isFlashErrorPresent } from './app/Flash.js';
import { ExpectedConditions as EC } from 'protractor';

describe('Authentication', function () {

	beforeEach(function () {
		// browser.get('/wp-login.php');
	});

	xit('should login', function () {
				SignUp('user@email.com', 'mypassword').then(
						function () {
							expect(isFlashErrorPresent()).toBe(false, 'Sign Up failed ends with error...'); // failing by intention
						}
				);
			}
	);

	it('login to google', () => {
		browser.get("https://google.com");
		browser.wait(EC.not(EC.titleIs('Foo')), 5000, "Something");
		$('[type=text]').click().sendKeys("pornhub" + protractor.Key.ENTER);
		browser.sleep(5000);
		
	})
});
