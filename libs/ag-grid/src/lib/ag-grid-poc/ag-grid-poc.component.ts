import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import {
  AllCommunityModule,
  ModuleRegistry,
  PaginationModule,
  type ColDef,
} from 'ag-grid-community';
import { ExportService } from '../services/export.service';
import { ExportFile } from '../models/export-file';
import { RowGroupingModule, RowGroupingPanelModule } from 'ag-grid-enterprise';

ModuleRegistry.registerModules([
  AllCommunityModule,
  PaginationModule,
  RowGroupingModule,
  RowGroupingPanelModule,
]);

@Component({
  selector: 'lib-ag-grid-poc',
  imports: [CommonModule, AgGridAngular],
  templateUrl: './ag-grid-poc.component.html',
  styleUrl: './ag-grid-poc.component.scss',
})
export class AgGridPocComponent {
  // todoInfo = input<any>();

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: 'userId',
      headerName: 'User',
      minWidth: 40,
      sort: 'asc',
    },
    { field: 'title', headerName: 'Todo Title', minWidth: 180 },
    { field: 'id', headerName: 'Todo Id', minWidth: 40 },
    { field: 'completed', headerName: 'Todo Status', minWidth: 40 },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
    // columnGroupShow: 'open',
    // rowGroup: true
  };

  constructor(private readonly exportService: ExportService) {}

  exportData(todoInfos: any[]) {
    const exportInfo: ExportFile[] = [
      {
        data: todoInfos,
        sheetName: 'ToDo',
        title: 'Todo Info',
        columnMapping: [
          { key: 'userId' },
          { key: 'title' },
          { key: 'id' },
          { key: 'completed' },
        ],
        header: ['User', 'Title', 'ID', 'Status'],
      },
    ];
    this.exportService.exportAsExcelFile('ToDO Info', exportInfo);
  }
}
