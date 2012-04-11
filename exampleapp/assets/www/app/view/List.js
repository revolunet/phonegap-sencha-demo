 Ext.define('PhonegapDemo.view.List', {
    extend: 'Ext.Panel',
    xtype: 'contactlist',
    requires: ['PhonegapDemo.store.Contacts'],
    config: {
        layout:'fit',
        items:[
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Awesome scrollable list',
                listeners:{}
            },
            {
                xtype:'list',
                itemTpl:'<img class="photo" src="{photo}" width="60" height="60"/>' +
                '<b>{displayName}</b><br/>' +
                '<i>{phoneNumber}</i>' +
                '<div style="font-size:0.8em;color:darkgrey;">{email}</div>' +
                '<div style="clear:both;display:none"></div>',
                 store: 'Contacts',
                 listeners:{
                    itemtap:function() {
                        this.getParent().actionSheet.show();
                    }
                }
            }
        ]
    },
    constructor:function(config) {
         this.actionSheet = Ext.create('Ext.ActionSheet', {
            items: [
                {
                    text: 'Appeler le contact',
                    ui  : 'action',
                    scope:this,
                    handler: function() {
                        //console.log(arguments);
                        this.actionSheet.hide();
                        //window.open('tel:+')
                    }
                },{
                    text: 'Envoyer un email',
                    ui  : 'action',
                    scope:this,
                    handler: function() {
                        this.actionSheet.hide();
                    }
                },
                {
                    text: 'Poke',
                    ui  : 'confirm',
                    id: 'poke',
                    scope:this,
                    handler: function() {
                        this.actionSheet.hide();
                    }
                },
                {
                    text: 'Annuler',
                    ui  : 'decline',
                    scope:this,
                    handler: function() {
                        this.actionSheet.hide();
                    }
                }
            ]
        });
        this.callParent(arguments);
        Ext.Viewport.add(this.actionSheet);
    }
});

