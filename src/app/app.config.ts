import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import Aura from "@openng/optimus-ui-themes/aura";
import { provideOptimus } from "@openng/optimus-ui/config";
import { routes } from "./app.routes";
import { AuthState } from "./auth-state";
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => {
      void inject(AuthState).initialize();
    }),
    provideRouter(routes, withHashLocation()),
    provideOptimus({
      theme: {
        preset: Aura,
        options: { darkModeSelector: '[data-theme="dark"]' },
      },
    }),
  ],
};
