Ext.define('Ext.ux.MyAjax', {
   extend: 'Ext.data.Connection',
   singleton: true,
   maskTarget: null, //Must be an Element like grid.getEl()
   msg: 'Aguarde...',
   disableCaching: false,
   method: 'POST',
   listeners: {
      beforerequest: function(con, opt) {
         if (!Ext.isEmpty(opt.maskTarget)){
            opt.maskTarget.mask(opt.msg);
         }
      },
      requestcomplete: function(con, res, opt) {
         if (!Ext.isEmpty(opt.maskTarget)){
            opt.maskTarget.unmask();
         }
      },
      requestexception: function(con, res, opt) {
         if (!Ext.isEmpty(opt.maskTarget)){
            opt.maskTarget.unmask();
         }
         Ext.Msg.show({
            title:   'Erro',
            msg:     'Houve um erro na comunicação com o servidor de dados.<br>Tente executar a operação novamente.',
            buttons: Ext.Msg.OK,
            icon:    Ext.MessageBox.ERROR
         });
      }
   }
});