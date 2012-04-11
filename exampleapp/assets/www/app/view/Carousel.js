 Ext.define('PhonegapDemo.view.Carousel', {
    extend: 'Ext.Panel',
    xtype: 'contactcarousel',
    requires: ['PhonegapDemo.store.Contacts'],
    config: {
        layout:'fit',
        items:[
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Awesome carousel',
                listeners:{}
            },
            {
                xtype:'carousel',
                direction: 'horizontal',
                indicator: false,
                items: []
            }
        ]

    }
});

