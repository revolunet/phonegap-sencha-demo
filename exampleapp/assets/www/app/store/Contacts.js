
Ext.define('PhonegapDemo.store.Contacts', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'PhonegapDemo.model.Contact',
        sorters: 'displayName',
        autoLoad: false,
        // grouper : function(record) {
        //     return record.get('date')[0];
        // },
        // proxy: {
        //     type: 'ajax',
        //     //url: 'ebg-mars.json',
        //     reader: {
        //         type: 'json'
        //     }
        // },
        listeners: {
            load: function (store) {
               // console.log(store);
            }
        }
       
    }
});