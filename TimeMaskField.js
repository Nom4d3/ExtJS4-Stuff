Ext.define('Ext.ux.TimeMaskField', {
   extend: 'Ext.form.field.Time',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.timemaskfield'],

   mask: '99:99',
   format: "H:i",
   altFormats: "H:i:s|g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H|gi a|hi a|giA|hiA|gi A|hi A",

   increment: 5,
   snapToIncrement: true,

   initComponent: function() {
      var me = this;

      me.plugins = [new Ext.ux.InputTextMask(me.mask)];

      me.callParent();
   }
});