Ext.define('Ext.ux.CnpjField', {
   extend: 'Ext.form.field.Text',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.cnpjfield'],

   onlyNumbers: false,
   mask: '99.999.999/9999-99',
   vtype: 'cnpj',

   initComponent: function(){
      var me = this;

      Ext.apply(Ext.form.VTypes, {
         cnpj: function(b, a) {
            return me.verificaCNPJ(b);
         },
         cnpjText: "CNPJ não é válido!"
      });

      me.mask = me.onlyNumbers ? '99999999999999' : '99.999.999/9999-99';
      me.plugins = [new Ext.ux.InputTextMask(me.mask)];

      me.callParent();
   },

   setValue: function(value) {
      var me = this;

      me.callParent(arguments);

      if (me.inputEl) {
         me.formatValue(me, value);
      }

      return me;
   },

   formatValue: function(me, value) {
      var v = value || '',
         txt = me.inputEl.dom,
         raw = v.replace(/[^0-9]/gi, "");

      if (raw.length == 0) return;

      txt.value = raw.substr(0, 2) + '.' + raw.substr(2, 3) + '.' + raw.substr(5, 3) + '/' + raw.substr(8, 4) + '-' + raw.substr(12, 2);
   },

   verificaCNPJ: function(a) {
      var me = this;
      if (a == "") return true;

      a = a.replace(/\D/g, "");
      a = a.replace(/^0+/, "");
      if (parseInt(a, 10) == 0) {
         return false;
      } else {
         g = a.length - 2;
         if (me.testaCNPJ(a, g) == 1) {
            g = a.length - 1;
            if (me.testaCNPJ(a, g) == 1) {
               return true;
            } else {
               return false;
            }
         } else {
            return false;
         }
      }
   },

   testaCNPJ: function(a, d) {
      var b = 0;
      var e = 2;
      var c;
      for (f = d; f > 0; f--) {
         b += parseInt(a.charAt(f - 1),10) * e;
         if (e > 8) {
            e = 2;
         } else {
            e++;
         }
      }
      b %= 11;
      if (b == 0 || b == 1) {
         b = 0;
      } else {
         b = 11 - b;
      }
      if (b != parseInt(a.charAt(d),10)) {
         return (0);
      } else {
         return (1);
      }
   }
});