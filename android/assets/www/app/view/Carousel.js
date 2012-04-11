Ext.define('PhonegapDemo.view.Carousel', {
    extend: 'Ext.Carousel',

    xtype: 'contactcarousel',

    requires: ['PhonegapDemo.store.Contacts'],

    config: {
        indicator: false,
        direction: 'horizontal',
        title: 'Awesome carousel',
        defaults: {
            tpl: [
                '<div style="text-align:center"><br>',
                '<p>Contact #{id}</p><br>',
                '<img style="border:1px solid silver" src="{photo}" width=200 height=200/>',
                '<br><br><p><a href="tel:+{phoneNumber}">{phoneNumber}</a></p><br>',
                '</div>'
            ]
        }
    }
});
