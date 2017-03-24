exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {

   browser.driver.get('http://localhost:3000');

   browser.driver.wait(function(){   
   return    browser.driver.isElementPresent(by.id('entrar')).then(function(el){
         return el === true;
       });
     }).
   then(function(){

    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.findElement(by.id('login_field'))
    	.sendKeys('celsobrauna@gmail.com');
    browser.driver.findElement(by.id('password'))
    	.sendKeys('ksoaksoaksoakso');
    browser.driver.findElement(by.name('commit')).click();  

    });

    
  }
};