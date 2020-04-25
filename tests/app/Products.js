import { ExpectedConditions as EC } from 'protractor';

export class Products {
    addProduct(name, price, salePrice, desc, code, weight, width, length, height) {
        browser.wait(EC.elementToBeClickable($('button pe-progress-button-content')), 20000, 'Add product button is clickable');
        $('button pe-progress-button-content').click();
        
        /* Issues with dinamical ids and internal server error after saving product */

        // browser.wait(EC.elementToBeClickable($('[data-pe-navbar-link="save"]')), 5000);
        // $('div.upper-title__buttons integration-button button').click();
        // browser.wait(EC.elementToBeClickable($('#mat-input-12')), 30000);
        // $('#mat-input-12').click().sendKeys(name);
        // browser.wait(EC.elementToBeClickable($('#mat-input-13')), 10000);
        // $('#mat-input-13').click().sendKeys(price);
        // browser.wait(EC.elementToBeClickable($('#mat-input-14')), 10000);
        // $('#mat-input-14').click().sendKeys(salePrice);
        // browser.wait(EC.elementToBeClickable($('div.outline-none')), 10000);
        // $('div.outline-none').click().sendKeys(desc);
        // browser.wait(EC.elementToBeClickable($('#mat-input-16')), 10000);
        // $('#mat-input-16').click().sendKeys(code);
        // browser.wait(EC.elementToBeClickable($('#mat-input-24')), 10000);
        // $('#mat-input-24').click().sendKeys(weight);
        // browser.wait(EC.elementToBeClickable($('#mat-input-25')), 10000);
        // $('#mat-input-25').click().sendKeys(width);
        // browser.wait(EC.elementToBeClickable($('#mat-input-26')), 10000);
        // $('#mat-input-26').click().sendKeys(length);
        // browser.wait(EC.elementToBeClickable($('#mat-input-27')), 10000);
        // $('#mat-input-27').click().sendKeys(height);
        browser.wait(EC.presenceOf($('input[type="file"]')), 30000);
        $('input[type="file"]').sendKeys("**/images/9e8e68abe0c2dd6b6f39e26c25598988.png")
        browser.wait(EC.elementToBeClickable($('[data-pe-navbar-link="save"]')), 10000, 'Save button is clickable');
        $('[data-pe-navbar-link="save"]').click();
    }
}