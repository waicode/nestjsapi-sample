import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class QiitaService {
  constructor(private httpService: HttpService) {}
  getItems(): Observable<AxiosResponse<[]>> {
    // https://qiita.com/api/v2/docs#get-apiv2items
    const url = 'https://qiita.com/api/v2/items?page=1&per_page=1';
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
