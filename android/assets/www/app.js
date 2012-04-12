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

        // load phonegap stuff
        document.addEventListener("deviceready", function () {
            alert("deviceready");
            mainPanel.fireEvent("deviceready");
        } , true);
    }

});
