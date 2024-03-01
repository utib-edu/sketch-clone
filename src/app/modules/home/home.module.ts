import { NgModule } from '@angular/core';
import { FirstSectionComponent } from './sections/first-section/first-section.component';
import { HomeComponent } from './home.component';
import { SecondSectionComponent } from './sections/second-section/second-section.component';
import { ThirdSectionComponent } from './sections/third-section/third-section.component';
import { WaveCommonComponent } from './sections/wave-common/wave-common.component';
import { FourthSectionComponent } from './sections/fourth-section/fourth-section.component';
import { FivethSectionComponent } from './sections/fiveth-section/fiveth-section.component';
import { SixthSectionComponent } from './sections/sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './sections/seventh-section/seventh-section.component';
import { EighthSectionComponent } from './sections/eighth-section/eighth-section.component';
import { SectionTitleComponent } from './sections/section-title/section-title.component';

@NgModule({
    declarations: [
        HomeComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        ThirdSectionComponent,
        WaveCommonComponent,
        FourthSectionComponent,
        FivethSectionComponent,
        SixthSectionComponent,
        SeventhSectionComponent,
        EighthSectionComponent,
        SectionTitleComponent
    ],
    imports: [],
    exports: [],
    providers: [],
})
export class HomeModule { }
