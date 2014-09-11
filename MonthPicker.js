Ext.define('Ext.ux.MonthPicker', {
   extend:'Ext.form.field.Date',
   alias: 'widget.uxmonthpicker',
   requires: ['Ext.picker.Month'],
   alternateClassName: ['Ext.form.MonthField', 'Ext.form.Month'],
   selectMonth: null,
   width: 120,
   editable: false,
   submitFormat: 'Y-m',
   format: 'M/Y',

   createPicker: function() {
      var me = this, format = Ext.String.format;

      return Ext.create('Ext.picker.Month', {
         pickerField: me,
         ownerCt: me.ownerCt,
         renderTo: document.body,
         showButtons: false,
         floating: true,
         hidden: true,
         focusOnShow: true,
         minDate: me.minValue,
         maxDate: me.maxValue,
         disabledDatesRE: me.disabledDatesRE,
         disabledDatesText: me.disabledDatesText,
         disabledDays: me.disabledDays,
         disabledDaysText: me.disabledDaysText,
         format: me.format,
         yearOffset: 4,
         showToday: me.showToday,
         startDay: me.startDay,
         minText: format(me.minText, me.formatDate(me.minValue)),
         maxText: format(me.maxText, me.formatDate(me.maxValue)),
         listeners: {
            select:        { scope: me,   fn: me.onSelect      },
            monthdblclick: { scope: me,   fn: me.onOKClick     },
            yeardblclick:  { scope: me,   fn: me.onOKClick     },
            OkClick:       { scope: me,   fn: me.onOKClick     },
            CancelClick:   { scope: me,   fn: me.onCancelClick }
         },
         keyNavConfig: {
            esc: function() {
               me.collapse();
            }
         }
      });
   },

   onSelect: function(m, d) {
      var me = this;
      me.value = new Date(( d[0]+1 ) +'/1/'+d[1]);
      me.setValue(me.value);
      me.collapse();
      me.fireEvent('selectmonth', me, me.value);
   },

   getSubmitValue: function() {
      return Ext.Date.format(this.value, this.submitFormat);
   }
});