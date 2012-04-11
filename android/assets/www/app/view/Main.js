Ext.define('PhonegapDemo.view.Main', {
    extend: 'Ext.TabPanel',

    xtype: 'mainpanel',

    requires: [
        'PhonegapDemo.view.Home',
        'PhonegapDemo.view.List',
        'PhonegapDemo.view.Actions',
        'PhonegapDemo.view.Carousel'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        masked: {
            xtype: 'loadmask',
            message: 'Loading contacts...'
        },
        items: [{
            xtype: 'homecard',
            iconCls: 'home',
            title: 'Home'
        }, {
            xtype: 'contactnav',
            iconCls: 'calendar2',
            title: 'List'
        }]
    }
});
