import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EntryModule } from './entry/entry.module';


platformBrowserDynamic().bootstrapModule(EntryModule)
  .catch(err => console.error(err));
