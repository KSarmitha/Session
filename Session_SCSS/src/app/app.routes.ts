import { Routes } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';
import { BootstrapComponent } from '../nav-bar/bootstrap/bootstrap.component';
import { BulmaComponent } from '../nav-bar/bulma/bulma.component';
import { FoundationComponent } from '../nav-bar/foundation/foundation.component';
import { TailwindComponent } from '../nav-bar/tailwind/tailwind.component';
import { ScssFeaturesComponent } from '../scss-features/scss-features.component';

export const routes: Routes = [
    { path: '', component: ScssFeaturesComponent, title: 'SCSS|features'},
    { path: 'bootstrap', component: BootstrapComponent, title: 'Bootstrap|nav'},
    { path: 'foundation', component: FoundationComponent, title: 'Foundation|nav'},
    { path: 'bulma', component: BulmaComponent, title: 'Bulma|nav'},
    { path: 'tailwind', component: TailwindComponent, title: 'Tailwind|nav'},
    { path: 'demo', component: DemoComponent, title: 'Tea' }
];
