Ext.define('Ext.ux.HtmlEditorMSSafe', {
   extend: 'Ext.form.HtmlEditor',
   alias: ['widget.htmleditormssafe'],

   initEditor : function() {
      var me = this;
      me.callParent();
      Ext.EventManager.on(me.getDoc(), 'paste', me.onPaste, me);

      if (Ext.isIE) {
         Ext.EventManager.on(me.getDoc(), 'keydown', me.ieOnPasteFix, me);
      }
   },

   getValue : function() {
      var me = this, value;

      if (!me.sourceEditMode) {
         me.syncValue();
      }
      value = me.rendered ? me.textareaEl.dom.value : me.value;
      me.value = value;
      return me.fixWordPaste(value);
   },

   ieOnPasteFix: function(e) {
      if (e.ctrlKey && Ext.EventObject.V == e.getKey()) {
         this.onPaste();
      }
   },

   onPaste: function(e) {
      var me = this;
      Ext.defer(function() {
         me.cleanWordPaste();
      }, 300);
   },

   cleanWordPaste: function() {
      var me = this;
      me.suspendEvents();
      value = me.rendered ? me.textareaEl.dom.value : me.value;
      me.value = value;
      me.setValue(me.fixWordPaste(value));
      me.resumeEvents();
   },

   fixWordPaste: function(wordPaste) { // /style=\"[^\"]*\"/g
      var removals = [/&nbsp;/ig, /[\r\n]/g, /<(xml|style)[^>]*>.*?<\/\1>/ig, /<\/?(meta|object|span)[^>]*>/ig,
         /<\/?[A-Z0-9]*:[A-Z]*[^>]*>/ig, /(lang|class|type|href|name|title|id|clear)=\"[^\"]*\"/ig, /<![\[-].*?-*>/g,
         /MsoNormal/g, /<\\?\?xml[^>]*>/g, /<\/?o:p[^>]*>/g, /<\/?v:[^>]*>/g, /<\/?o:[^>]*>/g, /<\/?st1:[^>]*>/g, /&nbsp;/g,
         /<\/?SPAN[^>]*>/g, /<\/?FONT[^>]*>/g, /<\/?STRONG[^>]*>/g, /<\/?H1[^>]*>/g, /<\/?H2[^>]*>/g, /<\/?H3[^>]*>/g, /<\/?H4[^>]*>/g,
         /<\/?H5[^>]*>/g, /<\/?H6[^>]*>/g, /<\/?P[^>]*><\/P>/g, /<!--(.*)-->/g, /<!--(.*)>/g, /<!(.*)-->/g, /<\\?\?xml[^>]*>/g,
         /<\/?o:p[^>]*>/g, /<\/?v:[^>]*>/g, /<\/?o:[^>]*>/g, /<\/?st1:[^>]*>/g, /lang=\"[^\"]*\"/g, /style=(\'\'|\"\")/ig, /style=\'[^\"]*\'/g,
         /lang=\'[^\"]*\'/g, /class=\"[^\"]*\"/g, /class=\'[^\"]*\'/g, /type=\"[^\"]*\"/g, /type=\'[^\"]*\'/g, /href=\'#[^\"]*\'/g,
         /href=\"#[^\"]*\"/g, /name=\"[^\"]*\"/g, /name=\'[^\"]*\'/g, / clear=\"all\"/g, /id=\"[^\"]*\"/g, /title=\"[^\"]*\"/g,
         /<span[^>]*>/g, /<\/?span[^>]*>/g, /class=/g];

      Ext.each(removals, function(s) {
         wordPaste = wordPaste.replace(s, "");
      });

      wordPaste = wordPaste.replace(/<div[^>]*>/g, "<p>");
      wordPaste = wordPaste.replace(/<\/?div[^>]*>/g, "</p>");
      return wordPaste;
   }
});