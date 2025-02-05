import { Injectable } from '@angular/core';
import { ExportFile } from '../models/export-file';
import { Workbook } from 'exceljs';
import { formatDate } from '@angular/common';
import { saveAs } from 'file-saver';

@Injectable({ providedIn: 'root' })
export class ExportService {
  readonly EXCEL_TYPE =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';

  exportAsExcelFile(fileName: string, fileData: Array<ExportFile>) {
    const workbook = new Workbook();

    fileData.forEach((file) => {
      const workSheet = workbook.addWorksheet(file.sheetName);
      workSheet.addRow(file.header).eachCell((cell) => ({
        ...cell,
        border: {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        },
      }));
    //   workSheet = { ...workSheet, ...{ columns: file.columnMapping } };
        workSheet.columns = file.columnMapping;

      workSheet.addRows(file.data);
    });

    workbook.xlsx.writeBuffer().then((buffer: any) => {
      this.saveAsExcelFile(buffer, fileName);
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    const format = 'MMddyyyy';
    const exportDate = formatDate(new Date(), format, 'en-US');
    saveAs(data, `${fileName}_${exportDate}${this.EXCEL_EXTENSION}`);
  }
}
