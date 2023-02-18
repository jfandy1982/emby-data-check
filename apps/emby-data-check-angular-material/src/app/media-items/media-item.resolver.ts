import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MediaItemDto } from './media-item.model';
import { MediaItemsService } from './media-items.service';

@Injectable({
  providedIn: 'root',
})
export class MediaItemResolver implements Resolve<MediaItemDto> {
  constructor(private mediaItemsService: MediaItemsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MediaItemDto | Observable<MediaItemDto> | Promise<MediaItemDto> {
    return this.mediaItemsService.getMediaItem(route.params['mediaitemid']);
  }
}
