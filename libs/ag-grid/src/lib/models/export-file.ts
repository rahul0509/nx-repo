import { Column } from "exceljs";

export interface ExportFile {
    data: Array<unknown>;
    header: Array<unknown>;
    columnMapping: Array<Partial<Column>>;
    sheetName: string;
    title: string;
  }