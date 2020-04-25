import { Login } from './app/LoginPage';
import { ExpectedConditions as EC } from 'protractor';
import { MainPage } from './app/MainPage.js';
import { Transactions } from './app/Transactions.js';
import { Connect } from './app/Connect.js';
import { Products } from './app/Products.js';


describe('Authentication', function () {
    let mainPage = new MainPage();

    beforeAll(function () {
        Login('aqa@payever.org', 'Aqacool123!'); 
    });
    
	it('Should navigate to widget Transactions and add item with id=52', function () {
        mainPage.goTo("transactions");
        let transactions = new Transactions();
        transactions.clickOnAddButton();
        transactions.addIdToList("52");
    });

    it('Should navigate to widget Connect and install "Ebay"', function () {
        mainPage.goTo("connect");
        let connect = new Connect();
        connect.installConnection("eBay");
    });

    it('Should navigate to widget Product and add product', function () {
        mainPage.goTo("products");
        let products = new Products();
        products.addProduct("Prod", "100", "10", "description", "123", "20", "10", "10", "10");
    });
    
    afterEach( () => {
        browser.wait(EC.elementToBeClickable($('button.close-button')), 10000);
        $('button.close-button').click();
    })
});
