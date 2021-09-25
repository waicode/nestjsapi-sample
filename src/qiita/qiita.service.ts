import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class QiitaService {
  constructor(private httpService: HttpService) {}
  getItems(count: number) {
    // https://qiita.com/api/v2/docs#get-apiv2items
    const url = 'https://qiita.com/api/v2/items?page=1&per_page=10';
    return this.httpService
      .get(url)
      .pipe(map((response) => response.data))
      .pipe(
        map((data) => {
          return data
            .sort((a, b) => {
              return a.created_at < b.created_at ? 1 : -1; // 降順
            })
            .filter((_, index: number) => {
              return index < count;
            })
            .map((item: any) => {
              return { title: item.title, created_at: item.created_at };
            });
        }),
      )
      .pipe(
        map((items) => {
          return { results: items };
        }),
      );
  }
}
