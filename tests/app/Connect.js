import { ExpectedConditions as EC } from 'protractor';

export class Connect {
    installConnection(connect) {
        browser.wait(EC.elementToBeClickable($('button.close-button')), 10000, 'Connect list items are not clickable');
        $$('div.integration-card-header-info-title').filter(elem => elem.getText().then(text => text == connect)).first().click();
        browser.wait(EC.elementToBeClickable($('div.upper-title__buttons integration-button button')), 5000, 'Install button is not clickable');
        $('div.upper-title__buttons integration-button button').click();
        browser.wait(EC.presenceOf($('div.payment-installed-title')), 10000);
        expect($('div.payment-installed-title').getText().then( text => {
            return text === "Installed"
        })).toBe(true);
    }
}