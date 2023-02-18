import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaItemsService } from '../media-items.service';

@Component({
  selector: 'edc-media-type-list',
  templateUrl: './media-type-list.component.html',
  styleUrls: ['./media-type-list.component.css'],
})
export class MediaTypeListComponent implements OnInit, OnDestroy {
  mediaTypes!: string[];
  private mediaItemsChangedSubscription!: Subscription;

  constructor(private mediaItemsService: MediaItemsService) {}

  ngOnInit(): void {
    this.getMediaTypes();
    this.mediaItemsChangedSubscription = this.mediaItemsService.mediaItemsChanged.subscribe(() => {
      this.getMediaTypes();
    });
  }

  ngOnDestroy(): void {
    this.mediaItemsChangedSubscription.unsubscribe();
  }

  private getMediaTypes() {
    this.mediaTypes = this.mediaItemsService.getMediaTypes();
  }
}
