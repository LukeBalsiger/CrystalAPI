var Service = require('node-windows').Service;

var svc = new Service({
  name:'CrystalAPI',
  description: 'Crystal backend',
  script: 'C:\\users\\lbalsiger\\ProjDev\\CrystalAPI\\src\\app.js'
});

svc.on('install',function(){
  svc.start();
});
 
svc.install();