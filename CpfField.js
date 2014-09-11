Ext.define('Ext.ux.CpfField', {
   extend: 'Ext.form.field.Text',
   requires: ['Ext.ux.InputTextMask'],
   alias: ['widget.cpffield'],

   onlyNumbers: false,
   mask: '999.999.999-99',
   vtype: 'cpf',

   initComponent: function(){
      var me = this;

      Ext.apply(Ext.form.VTypes, {
         cpf: function(b, a) {
            return me.validacpf(b);
         },
         cpfText: "CPF inválido!"
      });

      me.mask = me.onlyNumbers ? '99999999999' : '999.999.999-99';
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

      txt.value = raw.substr(0, 3) + '.' + raw.substr(3, 3) + '.' + raw.substr(6, 3) + '-' + raw.substr(9, 2);
   },

   validacpf: function(e) {
      if (e == "")
         return true;
      var b;
      s = e.replace(/\D/g, "");
      if (parseInt(s, 10) == 0) {
         return false;
      }

      var iguais = true;
      for (i = 0; i < s.length - 1; i++){
         if (s.charAt(i) != s.charAt(i + 1)){
            iguais = false;
         }
      }

      if (iguais)
         return false;

      var h = s.substr(0, 9);
      var a = s.substr(9, 2);
      var d = 0;
      for (b = 0; b < 9; b++) {
         d += h.charAt(b) * (10 - b);
      }
      if (d == 0) {
         return false;
      }
      d = 11 - (d % 11);
      if (d > 9) {
         d = 0;
      }
      if (a.charAt(0) != d) {
         return false;
      }
      d *= 2;
      for (b = 0; b < 9; b++) {
         d += h.charAt(b) * (11 - b);
      }
      d = 11 - (d % 11);
      if (d > 9) {
         d = 0;
      }
      if (a.charAt(1) != d) {
         return false;
      }
      return true;
   }
});