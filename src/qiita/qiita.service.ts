import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class QiitaService {
  constructor(private httpService: HttpService) {}
  getItems(count: number): Observable<{ title: string; created_at: string }[]> {
    // https://qiita.com/api/v2/docs#get-apiv2items
    const url = 'https://qiita.com/api/v2/items?page=1&per_page=10';
    return this.httpService
      .get(url)
      .pipe(map((response) => response.data))
      .pipe(
        map((data) => {
          return data
            .sort((first: any, second: any) => {
              return first.created_at < second.created_at ? 1 : -1; // 降順
            })
            .filter((_: any, index: number) => {
              return index < count;
            })
            .map((item: any) => {
              return { title: item.title, created_at: item.created_at };
            });
        }),
      );
  }
}
