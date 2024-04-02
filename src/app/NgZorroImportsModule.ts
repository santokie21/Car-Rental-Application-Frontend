import { NgModule } from "@angular/core";
//NG ZORRO IMPORTS
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  exports: [

    //NG ZORRO IMPORTS
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule
  ]
})
export class NgZorroImportsModule { }
