import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

interface MissingItem {
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

interface ResultMissingItem {
  Items: MissingItem[];
  TotalRecordCount: number;
}

@Component({
  selector: 'edc-ng-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss'],
})
export class MissingComponent implements OnInit, AfterViewInit {
  missingList: MissingItem[] = [];
  displayedColumns = ['Id', 'Type'];

  constructor(private readonly httpClient: HttpClient) {
    this.fetchData()
      //.pipe(tap((result3) => (this.missingList = result3)))
      .subscribe((result) => {
        // result.Items.forEach((missingItem: MissingItem) => {
        //   this.missingList.push(missingItem);
        // });
        this.missingList.push(result.Items[2]);
        console.log(this.missingList);
        //console.log(this.missingList[2]);
      });
  }

  ngAfterViewInit(): void {
    return;
  }

  ngOnInit(): void {
    return;
  }

  fetchData(): Observable<ResultMissingItem> {
    // const resultList: MissingItem[] = [];
    return this.httpClient.get<ResultMissingItem>(
      'http://192.168.173.2:8096/emby/Items?Recursive=true&api_key=292150045b894537bf0b61d0ce9c1a70&fields=Name,OriginalTitle,ServerId,Id,Etag,PresentationUniqueKey,SortName,ForcedSortName,ExternalUrls,Path,Type,SeriesName,SeriesId,SeasonId,Status,SeasonName,PartCount,MediaType&IsMissing=true&IncludeItemTypes=Video,Tag,MusicVideo,Season,Episode,Series,Movie&EnableImages=false'
    );
    // .pipe(
    //   tap((result) => {
    //     result.Items.forEach((missingItem: MissingItem) => {
    //       resultList.push(missingItem);
    //     });
    //   })
    // );
    //   .subscribe();
    // return of(resultList);
  }
}
