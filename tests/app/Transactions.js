import { ExpectedConditions as EC } from 'protractor';

export class Transactions {
    clickOnAddButton() {
        browser.wait(EC.elementToBeClickable($('span.filter-text')), 10000, 'Add button is not clickable');
        $('span.filter-text').click();
    }

    addIdToList(id) {
        browser.wait(EC.elementToBeClickable(element(by.xpath('//button[contains(text(),"Id")]'))), 5000, 'Id item is not clickable');
        element(by.xpath('//button[contains(text(),"Id")]')).click();
        browser.wait(EC.elementToBeClickable($('#mat-input-0')), 5000, 'Search fielr is not clickable');
        $('#mat-input-0').sendKeys(id);
        browser.wait(EC.elementToBeClickable($('div.text-right button')), 5000, 'Apple button is not clickable');
        $('div.text-right button').click();
        browser.refresh();
        browser.wait(EC.presenceOf($('mat-chip span.ng-star-inserted')), 10000);
        expect($('mat-chip span.ng-star-inserted').getText().then( text => {
            return text === id
        })).toBe(true);
    }
}