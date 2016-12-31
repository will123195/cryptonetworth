
Package.describe({
  name    : 'semantic:ui-table',
  summary : 'Semantic UI - Table: Single component release',
  version : '2.2.6',
  git     : 'git://github.com/Semantic-Org/UI-Table.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'table.css'
  ], 'client');
});
