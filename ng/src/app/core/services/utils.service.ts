import { Injectable } from '@angular/core';
import {environment} from '../../../../../ng2/src/environments/environment';

@Injectable()
export class UtilsService {

  constructor() { }

  getApiUrl(path: string): string {
    return `${environment.apiUrl}${path}`;
  }

  localeCompare(a: string, b: string) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }
}
