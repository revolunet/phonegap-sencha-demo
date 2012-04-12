Ext.define('PhonegapDemo.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            // we transform a bit the raw phonegap format
            {name: 'id', type:'int'},
            {name: 'displayName', type:'string'},
            {name: 'phoneNumber', type :'string', convert: function(val, rec) {return rec.raw.phoneNumbers && rec.raw.phoneNumbers[0] && rec.raw.phoneNumbers[0].value;} },
            {name: 'email', type:'string', convert: function(val, rec) {return rec.raw.emails && rec.raw.emails[0] && rec.raw.emails[0].value;}},
            {name: 'photo', type:'string', convert: function(val, rec) {return rec.raw.photos && rec.raw.photos[0] && rec.raw.photos[0].value;}}
        ]
    }
});
