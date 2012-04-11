Ext.define('PhonegapDemo.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainpanel',
    requires: [
        'PhonegapDemo.view.Home',
        'PhonegapDemo.view.List',
        'PhonegapDemo.view.Carousel'
    ],
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'homecard'
            },{
                xtype: 'contactlist',
                iconCls: 'calendar2',
                title: 'List'
            },{
                xtype: 'contactcarousel',
                iconCls: 'calendar2',
                title: 'Carousel'
            }
        ]
    }
});