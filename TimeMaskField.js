Ext.define('Ext.ux.TimeMaskField', {
   extend: 'Ext.form.field.Time',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.timemaskfield'],

   mask: '99:99',

   initComponent: function(){
      var me = this;

      me.plugins = [new Ext.ux.InputTextMask(me.mask)];

      me.callParent();
   }
});