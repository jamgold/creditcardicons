Package.describe({
  name: 'creditcardicons',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'credit card images sprite',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  // http://stackoverflow.com/questions/24143504/meteor-package-how-to-add-static-files
  api.addFiles('creditcardicons.css','client');
  api.addFiles('img/Flat-Credit-Card-Icons-580.png', 'client',{isAsset: true});
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('creditcardicons');
  api.addFiles('creditcardicons-tests.js');
});
