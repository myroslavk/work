import { ExpectedConditions as EC } from 'protractor';

export class MainPage {

    goTo(widget) {
        browser.wait(EC.elementToBeClickable($(`[data-pe-app="${widget}"]`)), 10000, `${widget} is not clickable`);
        $(`[data-pe-app="${widget}"]`).click();
    }

}