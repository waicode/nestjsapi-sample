import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class QiitaService {
  constructor(private httpService: HttpService) {}
  getItems(): Observable<{ id: string; title: string }[]> {
    // https://qiita.com/api/v2/docs#get-apiv2items
    const url = 'https://qiita.com/api/v2/items?page=1&per_page=1';
    return this.httpService
      .get(url)
      .pipe(map((response) => response.data))
      .pipe(
        map((data) => {
          return data.map((item) => {
            return { id: item.id, title: item.title };
          });
        }),
      );
  }
}
