Ext.define('PhonegapDemo.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'Home',
        styleHtmlContent:true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Phonegap Sencha demo'
        },
        {html:"<div id='logo'><img src='http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg'/></div>"},
        {html:"<div id='status'>Retrieving contact informations...</div>"}
        ]
    }
});
