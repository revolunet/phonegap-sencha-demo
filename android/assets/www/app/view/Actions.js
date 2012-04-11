Ext.define('PhonegapDemo.view.Actions', {

    extend: 'Ext.ActionSheet',

    xtype: 'contactactions',

    config: {
        items: [{
            text: 'Appeler le contact',
            ui  : 'action'
        }, {
            text: 'Envoyer un email',
            ui  : 'action'
        }, {
            text: 'Poke',
            ui  : 'confirm',
            action: 'poke'
        }, {
            text: 'Annuler',
            ui  : 'decline'
        }]
    }

});
