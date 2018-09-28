var webdriver = require('selenium-webdriver'),By = webdriver.By,until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://fc706921.ngrok.io');

var a = driver.findElement(By.id("finder")).getText();
if(a=="Hello World")
console.log("SUCCESS!!");
//driver.quit();