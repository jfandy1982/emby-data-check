import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaItemDto } from './media-item.model';
import { MediaItemsService } from './media-items.service';

@Injectable({
  providedIn: 'root',
})
export class MediaItemResolver implements Resolve<MediaItemDto> {
  constructor(private mediaItemsService: MediaItemsService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MediaItemDto | Observable<MediaItemDto> | Promise<MediaItemDto> {
    return this.mediaItemsService.getMediaItem(route.params['mediaitemid']);
  }
}
