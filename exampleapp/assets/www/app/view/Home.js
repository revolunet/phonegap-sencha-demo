Ext.define('PhonegapDemo.view.Home', {
    extend: 'Ext.Panel',

    xtype: 'homecard',

    config: {
        styleHtmlContent: true,
        style: 'background-color: white',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Phonegap Sencha demo'
        }, {
            html: "<div id='logo'><img src='logo.jpeg' width='150' height='150'/></div>"
        }, {
            html: "<div id='status'>Retrieving contact informations...</div>"
        }]
    }
});
