Ext.define('PhonegapDemo.view.List', {
    extend: 'Ext.navigation.View',

    xtype: 'contactnav',

    requires: ['PhonegapDemo.store.Contacts'],

    config: {
        items: [{
            xtype:'list',
            store: 'Contacts',
            onItemDisclosure: true,
            title: 'Awesome scrollable list',
            itemTpl:'<img class="photo" src="{photo}" width="60" height="60"/>' +
                '<b>{displayName}</b><br/>' +
                '<i>{phoneNumber}</i><br/>' +
                '<div style="font-size:0.8em;color:darkgrey;">{email}&nbsp;</div>' +
                '<div style="clear:both;display:none"></div>'
        }]
    }

});
