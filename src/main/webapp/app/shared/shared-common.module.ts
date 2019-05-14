import { NgModule } from '@angular/core';

import { JhipsterrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterrSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterrSharedCommonModule {}
