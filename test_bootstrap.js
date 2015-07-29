require.config({
  paths: {
    chai: '/bower_components/chai/'
  }
});

mocha.setup({
    ui: 'bdd'
});

require([
  //require other modules from your application if necessary here,
  testPathname
], function(){

  if(window.mochaPhantomJS){
    mochaPhantomJS.run();
  }
  else{
    mocha.run();
  }

});
