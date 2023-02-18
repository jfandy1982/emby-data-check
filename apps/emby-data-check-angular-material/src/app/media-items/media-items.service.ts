import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaItemDto } from './media-item.model';
import { MediaTypes } from './media-types.enum';

@Injectable({
  providedIn: 'root',
})
export class MediaItemsService {
  mediaItemsChanged = new Subject<MediaItemDto>();

  private mediaItems: MediaItemDto[] = [
    {
      mediaItemId: 'M-1',
      embyMediaItemId: '12345',
      embyServerId: 'abc123',
      serverId: 'S-1',
      embyDisplayName: 'Braveheart',
      embyMediaType: MediaTypes.MOVIE,
    },
    {
      mediaItemId: 'M-2',
      embyMediaItemId: '54321',
      embyServerId: 'abc123',
      serverId: 'S-1',
      embyDisplayName: 'The Simpsons',
      embyMediaType: MediaTypes.SERIES,
    },
    {
      mediaItemId: 'M-3',
      embyMediaItemId: '7896554321',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'The Simpsons',
      embyMediaType: MediaTypes.SERIES,
    },
    {
      mediaItemId: 'M-4',
      embyMediaItemId: '963147',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'Forrest Gump',
      embyMediaType: MediaTypes.MOVIE,
    },
    {
      mediaItemId: 'M-5',
      embyMediaItemId: '8521397',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'Death in Paradise',
      embyMediaType: MediaTypes.SERIES,
    },
    {
      mediaItemId: 'M-6',
      embyMediaItemId: '2521397',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'Death in Paradise - Season 1',
      embyMediaType: MediaTypes.SEASON,
    },
    {
      mediaItemId: 'M-7',
      embyMediaItemId: '9518521397',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'Arriving in the Paradise (S01E01)',
      embyMediaType: MediaTypes.EPISODE,
    },
    {
      mediaItemId: 'M-8',
      embyMediaItemId: '3149397',
      embyServerId: 'abc124',
      serverId: 'S-2',
      embyDisplayName: 'Wicked Wedding Night (S01E02)',
      embyMediaType: MediaTypes.EPISODE,
    },
  ];

  getMediaItems(mediaType: string, serverId: string): MediaItemDto[] {
    return this.mediaItems.filter((filterMediaItem: MediaItemDto) => {
      return filterMediaItem.serverId === serverId && filterMediaItem.embyMediaType === mediaType;
    });
  }

  getMediaItem(mediaItemId: string): MediaItemDto {
    const foundMediaItem = this.mediaItems.find((mediaItem) => {
      return mediaItem.mediaItemId === mediaItemId;
    });
    if (foundMediaItem) {
      return foundMediaItem;
    } else {
      throw Error('Media Item with ID [' + mediaItemId + '] not found in Array of MediaItemService');
    }
  }

  getMediaTypes(): string[] {
    return ['Movie', 'Series'];
  }
}
