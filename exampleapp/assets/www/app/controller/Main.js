Ext.define('PhonegapDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            carouselPanel: 'contactcarousel',
            carousel: 'contactcarousel carousel'
        },
        control: {
            carouselPanel: {
                activate: function() {
                    // populate carousel when activated
                    var carousel = this.getCarousel();
                    if (carousel.items.length === 0) {
                        var tpl = new Ext.XTemplate(
                                '<div style="text-align:center"><br>',
                                '<p>Contact #{id}</p><br>',
                                '<img style="border:1px solid silver" src="{photo}" width=200 height=200/>',
                                '<br><br><p><a href="tel:+{phoneNumber}">{phoneNumber}</a></p><br>',
                                '</div>'
                            );
                        Ext.StoreMgr.get('Contacts').each(function(record) {
                            carousel.add({html:tpl.apply(record.data) });
                        });
                    }
                }
            }
        }
    }

});