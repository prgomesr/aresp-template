import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ConvenioComponent} from './convenio.component';
import {ConvenioDataComponent} from './convenio-data/convenio-data.component';
import {ConvenioRoutingModule} from './convenio-routing.module';
import { ConvenioService } from './convenio.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConvenioRoutingModule
  ],
  declarations: [ConvenioComponent, ConvenioDataComponent],
  providers: [ConvenioService]
})
export class ConvenioModule { }
