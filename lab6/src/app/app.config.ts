import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NewServiceService} from "./new-service.service";
import {AlbumsService} from "./albums/albums.service";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), NewServiceService, AlbumsService, provideHttpClient()]
};