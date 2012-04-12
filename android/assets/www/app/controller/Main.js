Ext.define('PhonegapDemo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel: 'mainpanel',
            homeCard: 'homecard',
            contactNav: 'contactnav',
            contactList: 'contactnav list',
            actionButtons: 'contactactions button',
            listButton: 'mainpanel button[title=Contacts]'
        },
        control: {
            mainPanel: {
                deviceready: 'onDeviceReady'
            },
            listButton: {
                tap: 'onListButtonTap'
            },
            contactList: {
                select: 'onListItemSelect',
                disclose: 'onListItemDisclose'
            },
            actionButtons: {
                tap: 'onActionButtonTap'
            }
        }
    },

    launch: function() {
        // this is auto launched
        if (Ext.os.deviceType == 'Desktop') {
            var store = Ext.getStore('Contacts'),
                count = store.getCount();
            this.updateHomeInfo(count);
        }
    },

    onDeviceReady: function() {
        // get phonegap contacts when ready
        // save scope for phonegap callback
        var me = this;
        var fields = ['*'];
        navigator.contacts.find(fields, function(contacts) {
            var validContacts = [],
                store = Ext.getStore('Contacts');

            for (var i = 0, l = contacts.length; i < l; i++) {
                // filter results
                if (contacts[i].photos && contacts[i].photos.length > 0 && contacts[i].photos[0].value !== '' && contacts[i].displayName && contacts[i].phoneNumbers && contacts[i].phoneNumbers.length > 0 && contacts[i].emails && contacts[i].emails.length > 0) {
                    validContacts.push(contacts[i]);
                }
            }
            store.add(validContacts);
            me.updateHomeInfo(store.getCount());
        }, function() {
            navigator.notification.alert("cannot access phone contacts :/");
        });
    },

    onListItemSelect: function() {
        var sheet = Ext.Viewport.down('contactactions');
        if (!sheet) {
            sheet = Ext.create('PhonegapDemo.view.Actions');
            Ext.Viewport.add(sheet);
        }
        sheet.show();
    },

    onListItemDisclose: function(list, record) {
        var carousel,
            nav = this.getContactNav(),
            store = Ext.getStore('Contacts');

        carousel = nav.push({
            xtype: 'contactcarousel'
        });

        store.each(function(record) {
            carousel.add({data: record.data});
        });

        carousel.setActiveItem(store.indexOf(record));
    },

    onListButtonTap: function() {
        var button = this.getListButton();
        button.setBadgeText(false);
    },

    onActionButtonTap: function() {
        var sheet = Ext.Viewport.down('contactactions');
        sheet.hide();
    },

    updateHomeInfo: function(count) {
        var home = this.getHomeCard(),
            item = home.items.last(),
            mainPanel = this.getMainPanel(),
            listButton = this.getListButton(),
            html = "<div id='status'>" + count + " contact"+ (count > 1 ? 's' : '') +" found</div>";

        item.setHtml(html);
        mainPanel.setMasked(false);
        listButton.setBadgeText(count);
    }

});