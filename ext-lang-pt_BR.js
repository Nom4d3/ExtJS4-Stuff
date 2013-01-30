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
 * 30 January 2013 (4.1.1)
 */
Ext.onReady(function() {
    var cm = Ext.ClassManager,
        exists = Ext.Function.bind(cm.get, cm);

    if (Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Carregando...</div>';
    }

    if(exists('Ext.data.Types')){
        Ext.data.Types.stripRe = /[\$,%]/g;
    }

    if(exists('Ext.view.View')){
      Ext.view.View.prototype.emptyText = "";
    }

    if(exists('Ext.grid.Panel')){
      Ext.grid.Panel.prototype.ddText = "{0} linha{1} selecionada{1}";
    }

    if(exists('Ext.view.AbstractView')){
      Ext.apply(Ext.view.AbstractView.prototype, {
         loadingText: "Carregando..."
      });
    }

    if(Ext.Date) {
        Ext.Date.monthNames = [
          "Janeiro",
          "Fevereiro",
          "Mar&ccedil;o",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ];

        Ext.Date.getShortMonthName = function(month) {
          return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
          Jan : 0,
          Fev : 1,
          Mar : 2,
          Abr : 3,
          Mai : 4,
          Jun : 5,
          Jul : 6,
          Ago : 7,
          Set : 8,
          Out : 9,
          Nov : 10,
          Dez : 11
        };

        Ext.Date.getMonthNumber = function(name) {
          return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = [
          "Domingo",
          "Segunda",
          "Ter&ccedil;a",
          "Quarta",
          "Quinta",
          "Sexta",
          "S&aacute;bado"
        ];

        Ext.Date.getShortDayName = function(day) {
          return Ext.Date.dayNames[day].substring(0, 3);
        };

        Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
    }

    if (Ext.MessageBox) {
        Ext.MessageBox.buttonText = {
            ok: "OK",
            cancel: "Cancelar",
            yes: "Sim",
            no: "N&atilde;o"
        };
    }

    if(exists('Ext.util.Format')){
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

    if(exists('Ext.picker.Date')){
      Ext.apply(Ext.picker.Date.prototype, {
          todayText         : "Hoje",
          minText           : "Esta data &eacute; anterior a menor data",
          maxText           : "Esta data &eacute; posterior a maior data",
          disabledDaysText  : "",
          disabledDatesText : "",
          monthNames        : Ext.Date.monthNames,
          dayNames          : Ext.Date.dayNames,
          nextText          : 'Pr&oacute;ximo M&ecirc;s (Control+Direita)',
          prevText          : 'M&ecirc;s Anterior (Control+Esquerda)',
          monthYearText     : 'Escolha um M&ecirc;s (Control+Cima/Baixo para mover entre os anos)',
          todayTip          : "{0} (Espa&ccedil;o)",
          format            : "d/m/Y",
          startDay          : 0
      });
    }

    if(exists('Ext.picker.Month')) {
      Ext.apply(Ext.picker.Month.prototype, {
          okText            : "&#160;OK&#160;",
          cancelText        : "Cancelar"
      });
    }

    if(exists('Ext.toolbar.Paging')){
      Ext.apply(Ext.PagingToolbar.prototype, {
          beforePageText : "P&aacute;gina",
          afterPageText  : "de {0}",
          firstText      : "Primeira P&aacute;gina",
          prevText       : "P&aacute;gina Anterior",
          nextText       : "Pr&oacute;xima P&aacute;gina",
          lastText       : "&Uacute;ltima P&aacute;gina",
          refreshText    : "Atualizar",
          displayMsg     : "<b>{0} &agrave; {1} de {2} registro(s)</b>",
          emptyMsg       : 'Sem registros para exibir'
      });
    }

    if(exists('Ext.form.Basic')){
        Ext.form.Basic.prototype.waitTitle = "Carregando...";
    }

    if(exists('Ext.form.field.Base')){
      Ext.form.field.Base.prototype.invalidText = "O valor desse campo &eacute; inv&aacute;lido";
    }

    if(exists('Ext.form.field.Text')){
      Ext.apply(Ext.form.field.Text.prototype, {
          minLengthText : "O tamanho m&iacute;nimo para este campo &eacute; {0}",
          maxLengthText : "O tamanho m&aacute;ximo para este campo &eacute; {0}",
          blankText     : "Este campo &eacute; obrigat&oacute;rio.",
          regexText     : "",
          emptyText     : null
      });
    }

    if(exists('Ext.form.field.Number')){
      Ext.apply(Ext.form.field.Number.prototype, {
          decimalSeparator : ",",
          decimalPrecision : 2,
          minText : "O valor m&iacute;nimo para este campo &eacute; {0}",
          maxText : "O valor m&aacute;ximo para este campo &eacute; {0}",
          nanText : "{0} n&atilde;o &eacute; um n&uacute;mero v&aacute;lido"
      });
    }

    if(exists('Ext.form.field.Date')){
      Ext.apply(Ext.form.field.Date.prototype, {
        disabledDaysText  : "Desabilitado",
        disabledDatesText : "Desabilitado",
        minText           : "A data deste campo deve ser posterior a {0}",
        maxText           : "A data deste campo deve ser anterior a {0}",
        invalidText       : "{0} n&atilde;o &eacute; uma data v&aacute;lida - deve ser informado no formato {1}",
        format            : "d/m/Y",
        altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
      });
    }

    if(exists('Ext.form.field.ComboBox')){
      Ext.apply(Ext.form.field.ComboBox.prototype, {
         valueNotFoundText : undefined
      });
      Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
         loadingText       : "Carregando..."
      });
    }

    if(exists('Ext.form.field.VTypes')){
      Ext.apply(Ext.form.field.VTypes, {
          emailText    : 'Este campo deve ser um endere&ccedil;o de e-mail v&aacute;lido, no formato "usuario@dominio.com.br"',
          urlText      : 'Este campo deve ser uma URL no formato "http:/'+'/www.dominio.com.br"',
          alphaText    : 'Este campo deve conter apenas letras e _',
          alphanumText : 'Este campo deve conter apenas letras, n&uacute;meros e _'
      });
    }

    if(exists('Ext.form.field.HtmlEditor')){
      Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        createLinkText : 'Por favor, entre com a URL do link:',
        buttonTips : {
            bold : {
               title: 'Negrito (Ctrl+B)',
               text: 'Deixa o texto selecionado em negrito.',
               cls: 'x-html-editor-tip'
            },
            italic : {
               title: 'It&aacute;lico (Ctrl+I)',
               text: 'Deixa o texto selecionado em it&aacute;lico.',
               cls: 'x-html-editor-tip'
            },
            underline : {
               title: 'Sublinhado (Ctrl+U)',
               text: 'Sublinha o texto selecionado.',
               cls: 'x-html-editor-tip'
           },
           increasefontsize : {
               title: 'Aumentar Texto',
               text: 'Aumenta o tamanho da fonte.',
               cls: 'x-html-editor-tip'
           },
           decreasefontsize : {
               title: 'Diminuir Texto',
               text: 'Diminui o tamanho da fonte.',
               cls: 'x-html-editor-tip'
           },
           backcolor : {
               title: 'Cor de Fundo',
               text: 'Muda a cor do fundo do texto selecionado.',
               cls: 'x-html-editor-tip'
           },
           forecolor : {
               title: 'Cor da Fonte',
               text: 'Muda a cor do texto selecionado.',
               cls: 'x-html-editor-tip'
           },
           justifyleft : {
               title: 'Alinhar &agrave; Esquerda',
               text: 'Alinha o texto &agrave; esquerda.',
               cls: 'x-html-editor-tip'
           },
           justifycenter : {
               title: 'Centralizar Texto',
               text: 'Centraliza o texto no editor.',
               cls: 'x-html-editor-tip'
           },
           justifyright : {
               title: 'Alinhar &agrave; Direita',
               text: 'Alinha o texto &agrave; direita.',
               cls: 'x-html-editor-tip'
           },
           insertunorderedlist : {
               title: 'Lista com Marcadores',
               text: 'Inicia uma lista com marcadores.',
               cls: 'x-html-editor-tip'
           },
           insertorderedlist : {
               title: 'Lista Numerada',
               text: 'Inicia uma lista numerada.',
               cls: 'x-html-editor-tip'
           },
           createlink : {
               title: 'Link',
               text: 'Transforma o texto selecionado em um link.',
               cls: 'x-html-editor-tip'
           },
           sourceedit : {
               title: 'Editar Fonte',
               text: 'Troca para o modo de edi&ccedil;&atilde;o de c&oacute;digo fonte.',
               cls: 'x-html-editor-tip'
           }
        }
      });
    }

    if(exists('Ext.grid.header.Container')){
      Ext.apply(Ext.grid.header.Container.prototype, {
        sortAscText  : "Ordem Ascendente",
        sortDescText : "Ordem Descendente",
        columnsText  : "Colunas"
      });
    }

    if(exists('Ext.grid.feature.Grouping')){
      Ext.apply(Ext.grid.feature.Grouping.prototype, {
        emptyGroupText : '(Nenhum)',
        groupByText    : 'Agrupar Por Esse Campo',
        showGroupsText : 'Exibir em Grupos'
      });
    }

    if(exists('Ext.grid.PropertyColumnModel')){
      Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
        nameText   : "Nome",
        valueText  : "Valor",
        dateFormat : "d/m/Y",
        trueText   : "verdadeiro",
        falseText  : "falso"
      });
    }

    if(exists('Ext.grid.BooleanColumn')){
       Ext.apply(Ext.grid.BooleanColumn.prototype, {
          trueText  : "verdadeiro",
          falseText : "falso",
          undefinedText: '&#160;'
       });
    }

    if(exists('Ext.grid.NumberColumn')){
        Ext.apply(Ext.grid.NumberColumn.prototype, {
            format : '0.000,00/i'
        });
    }

    if(exists('Ext.grid.DateColumn')){
        Ext.apply(Ext.grid.DateColumn.prototype, {
            format : 'd/m/Y'
        });
    }

    if(exists('Ext.form.field.Time')){
      Ext.apply(Ext.form.field.Time.prototype, {
        minText : "O hor&aacute;rio desse campo deve ser igual ou maior que {0}",
        maxText : "O hor&aacute;rio desse campo deve ser igual ou menor que {0}",
        invalidText : "{0} n&atilde;o &eacute; um hor&aacute;rio v&aacute;lido",
        format : "H:i",
        altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
      });
    }

    if(exists('Ext.form.CheckboxGroup')){
      Ext.apply(Ext.form.CheckboxGroup.prototype, {
        blankText : "Voc&ecirc; deve selecionar ao menos um item desse grupo"
      });
    }

    if(exists('Ext.form.RadioGroup')){
      Ext.apply(Ext.form.RadioGroup.prototype, {
        blankText : "Voc&ecirc; deve selecionar ao menos um item desse grupo"
      });
    }

    if(exists('Ext.grid.RowEditor')){
      Ext.apply(Ext.grid.RowEditor.prototype, {
         saveBtnText : "Salvar",
         cancelBtnText : "Cancelar",
         errorsText : "Erros",
         dirtyText : "Você deve salvar ou cancelar as alterações"
      });
    }

    if(exists('Ext.grid.column.Action')){
      Ext.apply(Ext.grid.column.Action.prototype, {
         menuText: '<i>Ações</i>'
      });
    }
});