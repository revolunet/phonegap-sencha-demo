Ext.application({
    name: 'PhonegapDemo',

    controllers: ['Main'],
    views: ['Main'],
    stores: ['Contacts'],
    models: ['Contact'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'PhonegapDemo.view.Main'
        });
        // alllow desktop debug
        if (Ext.os.deviceType=='Desktop') {
            this.fakeLaunch();
        }
        // load phonegap stuff
        document.addEventListener("deviceready", this.onDeviceReady, true);
    },
    fakeLaunch: function() {
        // mimic phonegap format
        var contacts = [
           {'id':1, 'displayName': 'Marie Testu', 'phoneNumbers': [{'value': '06 89 34 57 33'}], 'emails': [{'value': 'mtestu@hotmail.com'}], 'photos': [{'value': 'http://m4.licdn.com/mpr/mpr/shrink_100_100/p/4/000/145/015/1a4c5ed.jpg'}]},
           {'id':2, 'displayName': 'Philippe Dubert', 'phoneNumbers': [{'value': '06 57 33 89 34'}], 'emails': [{'value': 'pdubert@gmail.com'}], 'photos': [{'value': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/015/017/174ca01.jpg'}]},
           {'id':3, 'displayName': 'Francois Damien', 'phoneNumbers': [{'value': '06 89 68 34 56'}], 'emails': [{'value': 'fdamien@wanadoo.fr'}], 'photos': [{'value': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/0cc/12c/1c01ee7.jpg'}]}
        ];
        for (var i=0, j =contacts.length; i<j; i++) {
            Ext.StoreMgr.get('Contacts').add(contacts[i]);
        }
    },
    onDeviceReady: function() {
    // get phonegap contacts with 'displayName' fields
    navigator.contacts.find(['id', 'displayName', 'photos', 'phoneNumbers', 'emails'], function(contacts) {
        for (var i=0, j =contacts.length; i<j; i++) {
            Ext.StoreMgr.get('Contacts').add(contacts[i]);
        }
    }, function() {
        navigator.notification.alert("cannot access phone contacts :/");
    });
    }
});
