import { Component, Vue } from 'vue-property-decorator';
import WithRender from './ingredients.html';
import Ingredient from '@/types/Ingredient';
import draggable from 'vuedraggable';
import { namespace } from 'vuex-class';

const ingredientsModule = namespace('IngredientsModule');

@WithRender
@Component({
  components: {
    draggable,
  },
})
export default class IngredientListComp extends Vue {

  @ingredientsModule.State
  public ingredients!: Ingredient[];

  @ingredientsModule.State
  public addedIngredients!: Ingredient[];
}
