/**
 * Portuguese/Brazil Translation by Weber Souza
 * 08 April 2007
 * Updated by Allan Brazute Alves (EthraZa)
 * 06 September 2007
 * Updated by Leonardo Lima
 * 05 March 2008
 * Updated by Juliano Tarini (jtarini)
 * 22 April 2008
 * Updated by Matheus G Bombonato (Nom4d3)
 * http://www.extjs.com.br
 * 20 August 2013 (4.2.1)
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Fev: 1,
            Mar: 2,
            Abr: 3,
            Mai: 4,
            Jun: 5,
            Jul: 6,
            Ago: 7,
            Set: 8,
            Out: 9,
            Nov: 10,
            Dez: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        Ext.Date.defaultFormat = 'd/m/Y';
    }


    if (Ext.util && Ext.util.Format) {
        Ext.util.Format.__number = Ext.util.Format.number;
        Ext.util.Format.number = function(v, format) {
            return Ext.util.Format.__number(v, format || "0.000,00/i");
        };
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'R$',
            dateFormat: 'd/m/Y'
        });
        Ext.util.Format.brMoney = function(v) {
            var negativeSign = '',
                currencySign = 'R$';
            v = v - 0;
            if (v < 0) {
                v = -v;
                negativeSign = '-';
            }
            v = Ext.util.Format.number(v, '0.000,00/i');
            return Ext.String.format("{0}{1} {2}", negativeSign, currencySign, v);
        };
    }
});

Ext.define("Ext.locale.pt_BR.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.pt_BR.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} linha(s) selecionada(s)"
});

Ext.define("Ext.locale.pt_BR.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Fechar"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.pt_BR.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Carregando..."
});

Ext.define("Ext.locale.pt_BR.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Hoje",
    minText: "Esta data é anterior a menor data",
    maxText: "Esta data é posterior a maior data",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Próximo Mês (Control+Direita)',
    prevText: 'Mês Anterior (Control+Esquerda)',
    monthYearText: 'Escolha um Mês (Control+Cima/Baixo para mover entre os anos)',
    todayTip: "{0} (Espaço)",
    format: "d/m/Y",
    startDay: 0
});

Ext.define("Ext.locale.pt_BR.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Cancelar"
});

Ext.define("Ext.locale.pt_BR.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Página",
    afterPageText: "de {0}",
    firstText: "Primeira Página",
    prevText: "Página Anterior",
    nextText: "Próxima Página",
    lastText: "Última Página",
    refreshText: "Atualizar",
    displayMsg: "<b>{0} à {1} de {2} registro(s)</b>",
    emptyMsg: 'Sem registros para exibir'
});

Ext.define("Ext.locale.pt_BR.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "Por favor, aguarde..."
});

Ext.define("Ext.locale.pt_BR.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "O valor para este campo é inválido"
});

Ext.define("Ext.locale.pt_BR.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "O tamanho mínimo para este campo é {0}",
    maxLengthText: "O tamanho máximo para este campo é {0}",
    blankText: "Este campo é obrigatório.",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.pt_BR.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalSeparator: ",",
    decimalPrecision: 2,
    minText: "O valor mínimo para este campo é {0}",
    maxText: "O valor máximo para este campo é {0}",
    nanText: "{0} não é um número válido"
});

Ext.define("Ext.locale.pt_BR.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Desabilitado",
    disabledDatesText: "Desabilitado",
    minText: "A data deste campo deve ser posterior a {0}",
    maxText: "A data deste campo deve ser anterior a {0}",
    invalidText: "{0} não é uma data válida - deve ser informado no formato {1}",
    format: "d/m/Y",
    altFormats: "d/m/Y|d/m/y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.pt_BR.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Carregando..."
    });
});

Ext.define("Ext.locale.pt_BR.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Este campo deve ser um endereço de e-mail válido, no formato "usuario@dominio.com.br"',
    urlText: 'Este campo deve ser uma URL no formato "http:/' + '/www.dominio.com.br"',
    alphaText: 'Este campo deve conter apenas letras e _',
    alphanumText: 'Este campo deve conter apenas letras, números e _'
});

Ext.define("Ext.locale.pt_BR.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Por favor, entre com a URL do link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Negrito (Ctrl+B)',
                text: 'Deixa o texto selecionado em negrito.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Itálico (Ctrl+I)',
                text: 'Deixa o texto selecionado em itálico.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Sublinhado (Ctrl+U)',
                text: 'Sublinha o texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Aumentar Texto',
                text: 'Aumenta o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Diminuir Texto',
                text: 'Diminui o tamanho da fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Cor de Fundo',
                text: 'Muda a cor do fundo do texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Cor da Fonte',
                text: 'Muda a cor do texto selecionado.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Alinhar à Esquerda',
                text: 'Alinha o texto à esquerda.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centralizar Texto',
                text: 'Centraliza o texto no editor.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Alinhar à Direita',
                text: 'Alinha o texto à direita.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Lista com Marcadores',
                text: 'Inicia uma lista com marcadores.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Lista Numerada',
                text: 'Inicia uma lista numerada.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Link',
                text: 'Transforma o texto selecionado em um link.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Editar Fonte',
                text: 'Troca para o modo de edição de código fonte.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.pt_BR.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Ordem Ascendente",
    sortDescText: "Ordem Descendente",
    columnsText: "Colunas"
});

Ext.define("Ext.locale.pt_BR.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: 'd/m/Y'
});

Ext.define("Ext.locale.pt_BR.grid.BooleanColumn", {
    override: "Ext.grid.BooleanColumn",
    trueText: "verdadeiro",
    falseText: "falso",
    undefinedText: '&#160;'
});

Ext.define("Ext.locale.pt_BR.grid.NumberColumn", {
    override: "Ext.grid.NumberColumn",
    format: '0.000,00/i'
});

Ext.define("Ext.locale.pt_BR.grid.GroupingFeature", {
    override: "Ext.grid.GroupingFeature",
    emptyGroupText : '(Nenhum)',
    groupByText    : 'Agrupar Por Esse Campo',
    showGroupsText : 'Exibir em Grupos'
});

Ext.define("Ext.locale.pt_BR.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nome",
    valueText: "Valor",
    dateFormat: "d/m/Y",
    trueText: "verdadeiro",
    falseText: "falso"
});

Ext.define("Ext.locale.pt_BR.form.field.Time", {
    override: "Ext.form.field.Time",
    minText : "O horário desse campo deve ser igual ou maior que {0}",
    maxText : "O horário desse campo deve ser igual ou menor que {0}",
    invalidText : "{0} n&atilde;o &eacute; um horário válido",
    format : "H:i",
    altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});

Ext.define("Ext.locale.pt_BR.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "Você deve selecionar ao menos um item desse grupo"
});

Ext.define("Ext.locale.pt_BR.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "Você deve selecionar ao menos um item desse grupo"
});

Ext.define("Ext.locale.pt_BR.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Cancelar",
        yes: "Sim",
        no: "Não"
    }
});

/* These texts are not in any official translation, but they are also necessary */
Ext.define("Ext.locale.pt_BR.grid.locking.Lockable", {
    override: "Ext.grid.locking.Lockable",
    lockText: "Bloquear Coluna",
    unlockText: "Desbloquear Coluna"
});

Ext.define("Ext.locale.pt_BR.grid.feature.Grouping", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(Nenhum)',
    groupByText: 'Agrupar Por Esse Campo',
    showGroupsText: 'Exibir em Grupos'
});

Ext.define("Ext.locale.pt_BR.grid.RowEditor", {
    override: "Ext.grid.RowEditor",
    saveBtnText: "Salvar",
    cancelBtnText: "Cancelar",
    errorsText: "Erros",
    dirtyText: "Você deve salvar ou cancelar as alterações"
});

Ext.define("Ext.locale.pt_BR.grid.column.Action", {
    override: "Ext.grid.column.Action",
    menuText: '<i>Ações</i>'
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.pt_BR.Component", {
    override: "Ext.Component"
});

