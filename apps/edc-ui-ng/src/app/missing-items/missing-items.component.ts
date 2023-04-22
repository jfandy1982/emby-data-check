import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MissingItemsDataSource, MissingItem } from './missing-items-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'edc-ng-missing-items',
  templateUrl: './missing-items.component.html',
  styleUrls: ['./missing-items.component.css'],
})
export class MissingItemsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MissingItem>;
  dataSource: MissingItemsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Type', 'Name', 'SeriesName'];

  constructor(private readonly httpClient: HttpClient) {
    this.dataSource = new MissingItemsDataSource(this.httpClient);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
