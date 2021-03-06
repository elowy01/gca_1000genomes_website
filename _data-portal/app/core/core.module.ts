import { NgModule, ModuleWithProviders, Optional, SkipSelf }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav.component';
import { ApiSampleService } from './services/api-sample.service';
import { ApiDataCollectionService } from './services/api-data-collection.service';
import { ApiPopulationService } from './services/api-population.service';
import { ApiSuperPopulationService } from './services/api-superpopulation.service';
import { ApiAnalysisGroupService } from './services/api-analysis-group.service';
import { ApiFileService } from './services/api-file.service';
import { ApiSitemapService } from './services/api-sitemap.service';
import { ApiErrorService } from './services/api-error.service';
import { ApiTimeoutService } from './services/api-timeout.service';

@NgModule({
  imports: [ SharedModule, CommonModule, HttpModule ],
  providers: [
        ApiSampleService,
        ApiDataCollectionService,
        ApiAnalysisGroupService,
        ApiPopulationService,
				ApiSuperPopulationService,
        ApiErrorService,
        ApiTimeoutService,
        ApiFileService,
        ApiSitemapService,
  ],
  declarations: [ NavComponent ],
  exports: [ NavComponent ],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only')
    }
  }
}
