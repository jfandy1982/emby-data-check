import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaItemDto } from '../media-item.model';
import { MediaItemsService } from '../media-items.service';

@Component({
  selector: 'edc-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit, OnDestroy {
  mediaItems!: MediaItemDto[];
  private mediaItemsChangedSubscription!: Subscription;

  displayedColumns = ['mediaItemId', 'embyMediaItemId', 'embyDisplayName', 'embyType'];

  constructor(private mediaItemsService: MediaItemsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMediaItems();
    this.mediaItemsChangedSubscription = this.mediaItemsService.mediaItemsChanged.subscribe(() => {
      this.getMediaItems();
    });
  }

  ngOnDestroy(): void {
    this.mediaItemsChangedSubscription.unsubscribe();
  }

  private getMediaItems() {
    this.route.params.subscribe((params: Params) => {
      const mediaType = params['mediatypeid'];
      this.route.queryParams.subscribe((queryParams: Params) => {
        const serverId = queryParams['serverId'];
        this.mediaItems = this.mediaItemsService.getMediaItems(mediaType, serverId);
      });
    });
  }
}
