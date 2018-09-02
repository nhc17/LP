import { NgModule } from '@angular/core';

import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';



const MODULES =[
    MatButtonModule, MatCardModule, MatFormFieldModule, 
    MatIconModule, MatInputModule, MatListModule,
    MatSliderModule, MatToolbarModule, FlexLayoutModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {}