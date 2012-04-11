// for automatic dependencies
Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'PhonegapDemo',

    views: ['Main'],

    models: ['Contact'],

    stores: ['Contacts'],

    controllers: ['Main'],

    launch: function() {
        var mainPanel = Ext.Viewport.add({
            xclass: 'PhonegapDemo.view.Main'
        });

        console.warn('LAUNCH', mainPanel);

        // load phonegap stuff
        // document.addEventListener("deviceready", function () {
        //     alert(42);
        //     console.log('phonegap said: deviceready');
        //     mainPanel.fireEvent("deviceready");
        // } , true);
    }

});
