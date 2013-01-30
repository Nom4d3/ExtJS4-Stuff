Ext.define('Ext.ux.CepField', {
   extend: 'Ext.form.field.Text',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.cepfield'],

   mask: '99999-999',

   initComponent: function(){
      var me = this;
      me.plugins = [new Ext.ux.InputTextMask(me.mask)];

      me.callParent();
   }
});