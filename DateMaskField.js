Ext.define('Ext.ux.DateMaskField', {
   extend: 'Ext.form.field.Date',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.datemaskfield'],

   mask: '99/99/9999',

   initComponent: function(){
      var me = this;

      me.plugins = [new Ext.ux.InputTextMask(me.mask)];

      me.callParent();
   }
});