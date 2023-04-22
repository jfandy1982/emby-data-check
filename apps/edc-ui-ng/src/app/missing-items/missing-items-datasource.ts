import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// TODO: Replace this with your own data model type
export interface MissingItem {
  Name: string;
  ServerId: string;
  Id: string;
  Etag: string;
  PresentationUniqueKey: string;
  SortName: string;
  ExternalUrls: string[];
  IndexNumber: number;
  IsFolder: boolean;
  Type: string;
  SeriesName: string;
  SeriesId: string;
  SeriesPrimaryImageTag: string;
}

export interface ResultMissingItem {
  Items: MissingItem[];
  TotalRecordCount: number;
}

/**
 * Data source for the MissingItems view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MissingItemsDataSource extends DataSource<MissingItem> {
  data: MissingItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MissingItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange).pipe(
        map(() => {
          this.fetchData().subscribe();
          return this.getPagedData(this.getSortedData(this.data));
        })
      );
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  fetchData(): Observable<ResultMissingItem> {
    return this.httpClient
      .get<ResultMissingItem>(
        'http://192.168.173.2:8096/emby/Items?Recursive=true&api_key=292150045b894537bf0b61d0ce9c1a70&fields=Name,OriginalTitle,ServerId,Id,Etag,PresentationUniqueKey,SortName,ForcedSortName,ExternalUrls,Path,Type,SeriesName,SeriesId,SeasonId,Status,SeasonName,PartCount,MediaType&IsMissing=true&IncludeItemTypes=Video,Tag,MusicVideo,Season,Episode,Series,Movie&EnableImages=false'
      )
      .pipe(
        tap((result) => {
          result.Items.forEach((missingItem: MissingItem) => {
            if (missingItem.SeriesName === 'Ein Sommer in...') {
              this.data.push(missingItem);
            }
          });
        })
      );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    return;
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MissingItem[]): MissingItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MissingItem[]): MissingItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'Name':
          return compare(a.Name, b.Name, isAsc);
        case 'SeriesName':
          return compare(a.SeriesName, b.SeriesName, isAsc);
        case 'Id':
          return compare(a.Id, b.Id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
