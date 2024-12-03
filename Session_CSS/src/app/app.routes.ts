import { Routes } from '@angular/router';
import { AnimationComponent } from '../CSS3/animation/animation.component';
import { AttributeComponent } from '../CSS3/attribute/attribute.component';
import { CombinatorComponent } from '../CSS3/combinator/combinator.component';
import { FilterComponent } from '../CSS3/filter/filter.component';
import { PseudoElementComponent } from '../CSS3/pseudo-element/pseudo-element.component';
import { PseudoSelectorComponent } from '../CSS3/pseudo-selector/pseudo-selector.component';
import { TransformsComponent } from '../CSS3/transforms/transforms.component';
import { TransitionComponent } from '../CSS3/transition/transition.component';

export const routes: Routes = [
    { path: 'combinator', component: CombinatorComponent, title: 'CSS Combinators'},
    { path: 'attribute', component: AttributeComponent, title: 'Attribute Selector'},
    { path: 'pseudo-selector', component: PseudoSelectorComponent, title: 'Pseudo Selector'},
    { path: 'pseudo-element', component: PseudoElementComponent, title: 'Pseudo Element'},
    { path: 'transition', component: TransitionComponent, title: 'Transition'},
    { path: 'animation', component: AnimationComponent, title: 'Animation'},
    { path: 'transform', component: TransformsComponent, title: 'Transform'},
    { path: 'filter', component: FilterComponent, title: 'Filter'}
];
