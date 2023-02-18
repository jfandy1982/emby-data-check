import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { MediaItemDto } from '../media-item.model';
import { MediaItemsService } from '../media-items.service';

@Component({
  selector: 'emby-data-check-media-item-detail',
  templateUrl: './media-item-detail.component.html',
  styleUrls: ['./media-item-detail.component.css'],
})
export class MediaItemDetailComponent implements OnInit {
  mediaItem!: MediaItemDto;

  constructor(private mediaItemsService: MediaItemsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((routerData: Data) => {
      this.mediaItem = routerData['mediaitem'];
    });
  }
}
