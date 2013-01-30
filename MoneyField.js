Ext.define('Ext.ux.MoneyField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.moneyfield',

    decimalSeparator: ',',
    decimalPrecision: 2,
    allowDecimals: true,
    allowNegative: false,
    selectOnFocus: true,
    sign: '',

    initComponent: function () {
        //emptytext
        if (!this.emptyText) {
            this.emptyText = [];
            this.emptyText.length = this.decimalPrecision;
            this.emptyText = '0' + this.decimalSeparator + '0' + this.emptyText.join('0');
        }

        //decimal
        if (this.decimalPrecision <= 0) {
            this.allowDecimals = false;
        }

        //allowed characters
        var allowed = '0123456789' + this.decimalSeparator;
        Ext.escapeRe(allowed);

        //max length
        if (this.maxLength) {
            this.maxChars = this.maxLength;
            delete this.maxLength;
        }

        //config
        Ext.apply(this, {
            maskRe: new RegExp('[' + allowed + ']'),
            stripCharsRe: new RegExp('[^-' + allowed + ',\\.]', 'gi')
        });

        this.callParent(arguments);
    },

    initEvents: function () {
        var me = this;
        me.callParent();
        me.inputEl.on('keyup', me.changeSign, me);
    },

    changeSign: function (evt) {
        var key = evt.getKey();

        if (!this.allowNegative){
           return;
        }
        isMinus = key == 189 || key == 109 || (Ext.isOpera && key == 45);
        isPlus = key == 107 || key == 187 || (Ext.isOpera && key == 43);

        if (isMinus) {
            this.sign = this.sign == '' ? '-' : '';
        } else if (isPlus) {
            this.sign = '';
        } else {
            return;
        }

        var value = this.formatField(this.getRawValue());
        this.setRawValue(value);
        if (this.hiddenField) {
            this.hiddenField.value = this.formatNumber(value);
        }

        this.selectText();
    },

    //overrides
    /**
     * Para atribuir valor ao campo, sempre deve ser passado uma variável Number, ou que segue o formato
     * '0.00'. Ex: campo.setValue(4); campo.setValue(2.12); campo.setValue('7824122.12');
     */
    setValue: function (v) {
        var vNumber = this.formatNumber(v);
        v = vNumber.replace('.', this.decimalSeparator);

        this.sign = v.substr(0,1) == '-' ? '-' : '';
        if (this.hiddenField) {
            this.hiddenField.value = vNumber;
        }
        v = this.formatField(v);
        this.callParent([v]);
    },

    getValue: function () {
        var v = this.callParent(arguments);
        return this.formatNumber(v, true);
    },

    filterKeys: function (e) {
        if (e.ctrlKey) {
            return;
        }

        var k = e.getKey();
        if (
            (Ext.isGecko && (e.isNavKeyPress() || k == e.BACKSPACE || (k == e.DELETE && e.button == -1))) ||
            (Ext.isOpera && (e.isNavKeyPress() || k == e.BACKSPACE || k == e.DELETE))
        ) {
            return;
        }
        var cc = String.fromCharCode(e.getCharCode());
        if (!Ext.isGecko && e.isSpecialKey() && !cc) {
            e.stopEvent();
            return;
        }
        if (!this.maskRe.test(cc)) {
            e.stopEvent();
        }

        var v = this.getRawValue();

        //void typing 2 times the decimal separator
        if (cc === this.decimalSeparator && v.indexOf(this.decimalSeparator) !== -1) {
            e.stopEvent();
        }
    },

    onBlur: function () {
        var value = this.formatField(this.getRawValue());
        this.setRawValue(value);
        if (this.hiddenField) {
            this.hiddenField.value = this.formatNumber(value);
        }
        this.callParent(arguments);
    },

    onFocus: function () {
        if (Ext.isEmpty(this.value)){
            this.setRawValue(0);
        }

        var value = this.formatField(this.getRawValue());
        this.setRawValue(value);
        if (this.hiddenField) {
            this.hiddenField.value = this.formatNumber(value);
        }
        this.callParent(arguments);
    },

    getErrors: function (value) {
        var errors = this.callParent(arguments);

        if (this.maxChars) {
            if (this.getIntegerValue().length > this.maxChars) {
                errors.push(String.format(this.maxLengthText, this.maxChars));
            }
        }

        return errors;
    },

    onRender: function () {
        this.callParent(arguments);
        this.hiddenName = this.hiddenName || this.name;

        if (this.hiddenName) {
            this.hiddenField = this.el.insertSibling({
                tag: 'input',
                type: 'hidden',
                name: this.hiddenName
            }, 'before', true);

            this.el.dom.removeAttribute('name');
            this.mon(this.el, 'keyup', this.onElKeyUp, this);
        }
    },

    onEnable: function () {
        this.callParent(arguments);
        if (this.hiddenField) {
            this.hiddenField.disabled = false;
        }
    },

    onDisable: function () {
        this.callParent(arguments);
        if (this.hiddenField) {
            this.hiddenField.disabled = true;
        }
    },

    getName: function () {
        var hf = this.hiddenField;
        return hf && hf.name ? hf.name : this.hiddenName || this.callParent(arguments);
    },

    clearValue : function () {
        if (this.hiddenField) {
            this.hiddenField.value = '';
        }

        delete this.value;

        this.callParent(arguments);
    },

    initValue : function () {
        this.callParent(arguments);

        if (this.hiddenField) {
            this.hiddenField.value = this.getValue();
        }
    },

    //listeners
    onElKeyUp: function () {
        if (this.hiddenField) {
            this.hiddenField.value = this.getValue();
        }
    },

    //other methods
    /**
     * Format values like:
     * 10         -> 10,00
     * 10.20     -> 10,20
     * 145222	-> 145.22
     * 23452.1	-> 23.452,10
     */
    formatField: function (v) {
        //remove garbage
        v = v.replace(this.stripCharsRe, '');
        v = v.replace('-', '');

        //remove centsimal separators
        var centesimalSeparator = this.decimalSeparator === ',' ? '.' : ',';
        v = v.replace(new RegExp(Ext.escapeRe(centesimalSeparator), 'gi'), '');

        //define integer and decimal parts
        v = v.split(this.decimalSeparator);
        var partInt = v[0] || '0',
            partDec = v[1] || '';

        //fill with zeros
        if (this.allowDecimals) {
            while (partDec.length < this.decimalPrecision) {
                partDec += '0';
            }

            if (partDec.length > this.decimalPrecision) {
                partDec = partDec.substr(0, this.decimalPrecision);
            }
        }

        //remove left zeros on integer part
        partInt = partInt.split('');
        while (partInt.length && partInt[0] === '0') {
            partInt.shift();
        }
        partInt = partInt.join('') || '0';

        //format centesimal separator
        partInt = partInt.split('');
        var i = partInt.length;
        while ((i -= 3) > 0) {
            partInt[i - 1] += centesimalSeparator;
        }

        // decimal and integer parts
        v = partInt.join('') + (this.allowDecimals ? this.decimalSeparator + partDec : '');

        // sign
        if (this.allowNegative) {
            if (this.sign == '-' && v.substr(0, 1) != '-') {
                v = this.sign + v;
            } else if (this.sign == '' && v.substr(0, 1) == '-') {
                v = v.replace('-', '');
            } else if (this.sign == '-' && v.substr(0, 1) == '') {
                v = '-'+v;
            }
        }

        //return
        return v;
    },

    formatNumber: function (v, returnNumber) {
        var commaReg;
        v = v || 0;

        if (Ext.isString(v)) {
            //remove garbage
            v = v.replace(this.stripCharsRe, '');

            //format if it is not already formated (no commas and only one dot)
            var matchDot = v.match(/\./g);

            if (v.match(/,/g) || (matchDot && matchDot.length > 1)) {
                //remove centsimal separators
                var centesimalSeparator = this.decimalSeparator === ',' ? '.' : ',';
                v = v.replace(new RegExp(Ext.escapeRe(centesimalSeparator),'gi'),'');

                //define integer and decimal parts
                v = v.split(this.decimalSeparator);
                var partInt = v[0] || '0',
                    partDec = v[1] || '';

                //fill with zeros
                if (this.allowDecimals) {
                    while (partDec.length < this.decimalPrecision) {
                        partDec += '0';
                    }

                    if (partDec.length > this.decimalPrecision) {
                        partDec = partDec.substr(0,this.decimalPrecision);
                    }
                }

                //remove left zeros on integer part
                partInt = partInt.split('');
                while (partInt.length && partInt[0] === '0') {
                    partInt.shift();
                }
                partInt = partInt.join('') || '0';

                if ((this.allowNegative && partInt > 0 && this.sign == '-') || (partInt < 0 && this.sign != '-')) {
                    partInt = partInt * -1;
                } else {
                    partInt = Math.abs(partInt);
                }

                //join decimal and integer parts
                v = partInt + (this.allowDecimals ? '.' + partDec : '');
            }

            //parse float
            v = parseFloat(v,10);
        }

        if (!this.allowDecimals) {
            v = parseInt(v,10) || 0;
        }

        v = v || 0;
        return returnNumber ? v : this.allowDecimals ? v.toFixed(this.decimalPrecision) : v + '';
    },

    getIntegerValue: function () {
        return this.formatNumber(this.getRawValue()).split('.')[0];
    },

    getDecimalValue: function () {
        return this.formatNumber(this.getRawValue()).split('.')[1];
    }
});