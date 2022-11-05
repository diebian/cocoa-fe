import Vue from "vue";
Vue.mixin({
  methods: {
    downloadXls: function (table, title, desc) {
      var filename = `${title}, ${desc}`;
      var sheetname = `${desc}`;
      var uri = "data:application/vnd.ms-excel;base64,",
        template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
                                xmlns:x="urn:schemas-microsoft-com:office:excel"
                                xmlns="http://www.w3.org/TR/REC-html40">
                              <head><!--[if gte mso 9]>
                                  <meta charset="UTF-8">
                                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                                  <xml>
                                      <x:ExcelWorkbook>
                                          <x:ExcelWorksheets>
                                              <x:ExcelWorksheet>
                                              <x:Name>{worksheet}</x:Name>
                                              <x:WorksheetOptions>
                                                  <x:DisplayGridlines/>
                                              </x:WorksheetOptions>
                                              </x:ExcelWorksheet>
                                          </x:ExcelWorksheets>
                                      </x:ExcelWorkbook>
                                  </xml><![endif]-->
                              </head>
                              <body>
                                  <table>
                                      {table}
                                  </table>
                              </body>
                          </html>`,
        base64 = function (s) {
          return window.btoa(unescape(encodeURIComponent(s)));
        },
        format = function (s, c) {
          return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
          });
        };
      var toExcel = document.getElementById(table).innerHTML;
      var ctx = {
        worksheet: name || sheetname,
        table: toExcel,
      };
      var link = document.createElement("a");
      link.download = `${filename}.xls`;
      link.href = uri + base64(format(template, ctx));
      link.click();
    },
  },
});