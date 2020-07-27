import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  letterObj = {
    to: '',
    from: '',
    text: ''
  }

  pdfObj = null;

  constructor(public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) { }

  createPdf() {
    var docDefinition = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: [320, 90, 90],
            body: [
                [
                  {
                    border: [false, false, false, false],
                    // fillColor: '#444',
                    text: 'Relatório de Vistoria Simplificado',
                    fontSize: 20,
                    bold: true
                  },
                  {
                    border: [false, false, false, false],
                    // fillColor: '#444',
                    text: 'IMAGEM'
                  },
                  {
                    border: [false, false, false, false],
                    // fillColor: '#444',
                    text: 'OUTRA IMAGEM'
                  }
                ]
                

            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: [130, 80, 160, 120],
            body: [
              [{border:[false] ,text: 'Nome da Agência',fontSize:14, bold:true}, {border:[false] ,text: 'Junção',fontSize:14, bold:true}, {border:[false] ,text: 'Nº Processo',fontSize:14, bold:true}, {border:[false] ,text: 'Gestor',fontSize:14, bold:true}],
              [{border:[false] , text: '9410/Openspace Lapa'}, { border:[false] ,text: '9410', italics: false, color: 'gray' }, { border:[false] ,text: 'RA-BADM-1909410-46', italics: false, color: 'gray' }, { border:[false] ,text: 'Durval Vendrameto', italics: false, color: 'gray' }]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: [130, 130, 110, 80],
            body: [
              
              [{border:[false] ,text: 'Serviço',fontSize:11,bold:true}, {border:[false] ,text: 'Endereço',fontSize:11,bold:true}, {border:[false] ,text: 'Data Relatório',fontSize:11,bold:true}, {border:[false] ,text: 'Construtora',fontSize:11,bold:true}],
              [{border:[false], text:'Openspace e segregação de espaço'}, { border:[false] ,text: 'Rua Doze de Outubro, 125 - Lapa, São Paulo', italics: false, color: 'gray' }, { border:[false] ,text: '06/07/2020', italics: false, color: 'gray' }, { border:[false] ,text: 'Linc', italics: false, color: 'gray' }]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: [130,130,105,90],
            body: [
              [
                
                {
                  border: [false, false, false, false],
                  rowSpan: 2,
                  text: 'Data contratual\ninício',
                  fontSize: 11,
                  bold: true
 
                },
                {
                  border: [false, false, false, false],
                  rowSpan: 2,
                  text: 'término',
                  marginTop: 12,
                  fontSize: 11,
                  bold: true
                },
                {
                  border: [false, false, false, false],
                  rowSpan: 2,
                  text: 'prazo',
                  marginTop: 12,
                  fontSize: 11,
                  bold: true
                },
                {
                  border: [false, false, false, false],
                  text: 'status de obra',
                  marginTop: -10,
                  alignment: 'center'
                }
              ],
              [
                {
                  border: [false, false, false, false],
                  text: ''
                },
                {
                  border: [false, false, false, false],
                  text: ''
                },
                {
                  border: [false, false, false, false],
                  text: ''
                },
                {
                  border: [false, false, false, false],
                  text: '80%',
                  rowSpan: 2,
                  alignment: 'center',
                  marginTop: -6,
                  fontSize: 45,
                  color: '#EB6607',
                  bold: true,
                  borderColor: ['#999999','#999999','#999999','#999999']
                }
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '11/02/2020',
                  borderColor: ['#999999','#999999','#999999','#999999']
                },
                {
                  border: [false, false, false, false],
                  text: '05/07/2020',
                  borderColor: ['#999999','#999999','#999999','#999999']
                },
                {
                  border: [false, false, false, false],
                  text: '145',
                  borderColor: ['#999999','#999999','#999999','#999999']
                },
                {
                  border: [false, false, false, false],
                  text: ''
                }
              ]
            ]
          }
        },
        
        // 80%%%%%%%%%%%%%%%%%
        {
          style: 'tableExample',
          table: {
            widths: ['*'],
            body: [
              [
                { 
                  border: [false],
                  text:'Painel de atividades - Avaliação Semanal',
                  fontSize: 16, bold: true,
                  fillColor:'#eaeaec',

                }
              ]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', { text: 'I am auto sized.', noWrap: true }],
            ]
          }
        },
        { text: 'Defining row heights', style: 'subheader' },
        {
          style: 'tableExample',
          table: {
            heights: [20, 50, 70],
            body: [
              ['row 1 with height 20', 'column B'],
              ['row 2 with height 50', 'column B'],
              ['row 3 with height 70', 'column B']
            ]
          }
        },
        'With same height:',
        {
          style: 'tableExample',
          table: {
            heights: 40,
            body: [
              ['row 1', 'column B'],
              ['row 2', 'column B'],
              ['row 3', 'column B']
            ]
          }
        },
        'With height from function:',
        {
          style: 'tableExample',
          table: {
            heights: function (row) {
              return (row + 1) * 25;
            },
            body: [
              ['row 1', 'column B'],
              ['row 2', 'column B'],
              ['row 3', 'column B']
            ]
          }
        },
        { text: 'Column/row spans', pageBreak: 'before', style: 'subheader' },
        'Each cell-element can set a rowSpan or colSpan',
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [200, 'auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [{ text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center' }, {}, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
              [{ text: 'Header 1', style: 'tableHeader', alignment: 'center' }, { text: 'Header 2', style: 'tableHeader', alignment: 'center' }, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              [{ rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor' }, 'Sample value 2', 'Sample value 3'],
              ['', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' }, ''],
              ['Sample value 1', '', ''],
            ]
          }
        },
        { text: 'Headers', pageBreak: 'before', style: 'subheader' },
        'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
        { text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            // dontBreakRows: true,
            // keepWithHeaderRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              ]
            ]
          }
        },
        { text: 'Styling tables', style: 'subheader' },
        'You can provide a custom styler for the table. Currently it supports:',
        {
          ul: [
            'line widths',
            'line colors',
            'cell paddings',
          ]
        },
        'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
        { text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'noBorders'
        },
        { text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'headerLineOnly'
        },
        { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: 'lightHorizontalLines'
        },
        { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 1;
            },
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
            },
            // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
            // paddingLeft: function(i, node) { return 4; },
            // paddingRight: function(i, node) { return 4; },
            // paddingTop: function(i, node) { return 2; },
            // paddingBottom: function(i, node) { return 2; },
            // fillColor: function (rowIndex, node, columnIndex) { return null; }
          }
        },
        { text: 'zebra style', margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            fillColor: function (rowIndex, node, columnIndex) {
              return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
            }
          }
        },
        { text: 'handling fill color opacity...', margin: [0, 20, 0, 8] },
        { text: '... just hardcoding values in the second row', margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              [
                {text: 'Sample value 1',fillOpacity:0.15,fillColor:'blue'},
                {text: 'Sample value 2',fillOpacity:0.60,fillColor:'blue'},
                {text: 'Sample value 3',fillOpacity:0.85,fillColor:'blue'},
              ],
              ['Sample value 1', 'Sample value 2', 'Sample value 3']
            ]
          },
        },	
        { text: '... using a custom styler and overriding it in the second row', margin: [0, 20, 0, 8] },
        {
          style: 'tableOpacityExample',
          table: {
            body: [
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              [
                {text: 'Sample value 1',fillOpacity:0.15},
                {text: 'Sample value 2',fillOpacity:0.60},
                {text: 'Sample value 3',fillOpacity:0.85},
              ],
              ['Sample value 1', 'Sample value 2', 'Sample value 3']
            ]
          },
        },
        { text: '... with a function (opacity at 0 means fully transparent, i.e no color)', margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            fillColor: 'blue',
            fillOpacity: function (rowIndex, node, columnIndex) {
              return (rowIndex/8+columnIndex/3);
            }
          }
        },
        { text: 'and can be used dash border', margin: [0, 20, 0, 8] },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
              ['Sample value 1', 'Sample value 2', 'Sample value 3'],
            ]
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 1;
            },
            hLineColor: function (i, node) {
              return 'black';
            },
            vLineColor: function (i, node) {
              return 'black';
            },
            hLineStyle: function (i, node) {
              if (i === 0 || i === node.table.body.length) {
                return null;
              }
              return { dash: { length: 10, space: 4 } };
            },
            vLineStyle: function (i, node) {
              if (i === 0 || i === node.table.widths.length) {
                return null;
              }
              return { dash: { length: 4 } };
            },
            // paddingLeft: function(i, node) { return 4; },
            // paddingRight: function(i, node) { return 4; },
            // paddingTop: function(i, node) { return 2; },
            // paddingBottom: function(i, node) { return 2; },
            // fillColor: function (i, node) { return null; }
          }
        },
        { text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
        'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  border: [false, true, false, false],
                  fillColor: '#eeeeee',
                  text: 'border:\n[false, true, false, false]'
                },
                {
                  border: [false, false, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[false, false, false, false]'
                },
                {
                  border: [true, true, true, true],
                  fillColor: '#eeeeee',
                  text: 'border:\n[true, true, true, true]'
                }
              ],
              [
                {
                  rowSpan: 3,
                  border: [true, true, true, true],
                  fillColor: '#eeeeff',
                  text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                },
                {
                  border: undefined,
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [true, false, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[true, false, false, false]'
                }
              ],
              [
                '',
                {
                  colSpan: 2,
                  border: [true, true, true, true],
                  fillColor: '#eeffee',
                  text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                },
                ''
              ],
              [
                '',
                {
                  border: undefined,
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [false, false, true, true],
                  fillColor: '#dddddd',
                  text: 'border:\n[false, false, true, true]'
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },
        'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: '#eeeeee',
                  text: 'border:\n[false, false, false, false]'
                },
                {
                  fillColor: '#dddddd',
                  text: 'border:\nundefined'
                },
                {
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
              ],
              [
                {
                  fillColor: '#dddddd',
                  text: 'border:\nundefined'
                },
                {
                  fillColor: '#eeeeee',
                  text: 'border:\nundefined'
                },
                {
                  border: [true, true, false, false],
                  fillColor: '#dddddd',
                  text: 'border:\n[true, true, false, false]'
                },
              ]
            ]
          }
        },
        'And some other examples with rowSpan/colSpan...',
        {
          style: 'tableExample',
          table: {
            body: [
              [
                '',
                'column 1',
                'column 2',
                'column 3'
              ],
              [
                'row 1',
                {
                  rowSpan: 3,
                  colSpan: 3,
                  border: [true, true, true, true],
                  fillColor: '#cccccc',
                  text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                },
                '',
                ''
              ],
              [
                'row 2',
                '',
                '',
                ''
              ],
              [
                'row 3',
                '',
                '',
                ''
              ]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  colSpan: 3,
                  text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                  fillColor: '#eeeeee',
                  border: [false, false, false, false]
                },
                '',
                ''
              ],
              [
                'border:\nundefined',
                'border:\nundefined',
                'border:\nundefined'
              ]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [
                { rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false] },
                'border:\nundefined',
                'border:\nundefined'
              ],
              [
                '',
                'border:\nundefined',
                'border:\nundefined'
              ],
              [
                '',
                'border:\nundefined',
                'border:\nundefined'
              ]
            ]
          }
        },
        { text: 'BorderColor per Cell with Column/row spans', pageBreak: 'before', style: 'subheader' },
        'Each cell-element can set the borderColor (the cell above or left of the current cell has priority',
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [200, 'auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [
                {
                  text: 'Header with Colspan = 3',
                  style: 'tableHeader',
                  colSpan: 3,
                  borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                  alignment: 'center',
                },
                {},
                {},
              ],
              [
                {
                  text: 'Header 1',
                  style: 'tableHeader',
                  alignment: 'center',
                },
                {
                  text: 'Header 2',
                  style: 'tableHeader',
                  alignment: 'center',
                },
                {
                  text: 'Header 3',
                  style: 'tableHeader',
                  alignment: 'center',
                },
              ],
              [
                'Sample value 1',
                'Sample value 2',
                'Sample value 3',
              ],
              [
                {
                  rowSpan: 3,
                  borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                  text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                },
                'Sample value 2',
                {
                  text: 'Sample value 3',
                  borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                },
              ],
              [
                '',
                'Sample value 2',
                'Sample value 3',
              ],
              [
                'Sample value 1',
                'Sample value 2',
                'Sample value 3',
              ],
              [
                'Sample value 1',
                {
                  colSpan: 2,
                  rowSpan: 2,
                  borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                  text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time',
                },
                '',
              ],
              [
                'Sample value 1',
                {
                  text: 'a', borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                },
                {
                  text: '',
                  borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableOpacityExample: {
          margin: [0, 5, 0, 15],
          fillColor: 'blue',
          fillOpacity: 0.3
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      // this.pdfObj.download();
      this.pdfObj.open();
    }
  }

}