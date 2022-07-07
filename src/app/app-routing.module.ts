import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent }, // /
  { path: 'change-number', component: ChangeNumberComponent },  // /change-number
  { path: 'directives', component: DirectivesComponent },  // /directives
  { path: 'emitter', component: EmitterComponent },  // /emitter
  { path: 'eventos', component: EventosComponent },  // /eventos
  { path: 'first-component', component: FirstComponentComponent },  // /first-component
  { path: 'if-render', component: IfRenderComponent },  // /if-render
  { path: 'list-render', component: ListRenderComponent },  // /list-render
  { path: 'list-render/:id', component: ItemDetailComponent },  // /list-render/:id
  { path: 'parent-data', component: ParentDataComponent },  // /parent-data
  { path: 'pipes', component: PipesComponent },  // /pipes
  { path: 'two-way-binding', component: TwoWayBindingComponent },  // /two-way-binding
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
