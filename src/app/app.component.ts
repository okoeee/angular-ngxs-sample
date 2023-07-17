import { Component } from '@angular/core';
import { AnimalsState } from './animal.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AnimalAction } from './animal.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(AnimalsState.animals) animals$ : Observable<string[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.store.dispatch(new AnimalAction.GetAll());
  }

}
