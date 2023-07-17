import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AnimalAction } from "./animal.action";
import { ANIMALS } from "src/mock/animals";

export class AnimalStateModel {
  animals: string[] = [];
}

@State<AnimalStateModel>({
  name: 'animal', //nameは必須&一意である必要がある
  defaults: {
    animals: []
  }
})
@Injectable()
export class AnimalsState {

  @Action(AnimalAction.GetAll)
  getAll(ctx: StateContext<AnimalStateModel>) {
    ctx.patchState({
      animals: ANIMALS
    })
  }

  @Action(AnimalAction.Add)
  add(ctx: StateContext<AnimalStateModel>, action: AnimalAction.Add) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animals: [
        ...state.animals,
        action.name]
    })
  }

  // patchStateで簡略化できる
  // @Action(AnimalAction.Add)
  // add(ctx: StateContext<AnimalStateModel>, action: AnimalAction.Add) {
  //   ctx.patchState({
  //     animals: [
  //       ...ctx.getState().animals,
  //       action.name]
  //   })
  // }

  @Selector()
  static animals(state: AnimalStateModel) {
    return state.animals;
  }

}
