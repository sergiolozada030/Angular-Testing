import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard.component';
import { FatherComponent } from './father/father.component';
import { FatherSongComponent } from './father-song/father-song.component';

@NgModule({
  declarations: [CounterComponent, CharizardComponent, FatherComponent, FatherSongComponent],
  imports: [CommonModule],
})
export class BasicModule {}
