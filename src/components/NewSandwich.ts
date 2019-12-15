import { Component, Vue } from 'vue-property-decorator';
import WithRender from './new-sandwich.html';
import IngredientListComp from '@/components/IngredientListComp.ts';
import { namespace } from 'vuex-class';
import Ingredient from '@/types/Ingredient';
import Sandwich from '@/types/Sandwich';
import { uuid } from 'vue-uuid';

const ingredientsModule = namespace('IngredientsModule');
const sandwichesModule = namespace('SandwichesModule');

@WithRender
@Component({
    components: {
        IngredientListComp,
    },
})
export default class NewSandwich extends Vue {

    public name: string = '';
    public nameState: boolean | null = null;

    @ingredientsModule.State
    private addedIngredients!: Ingredient[];

    @sandwichesModule.Mutation
    private addSandwich!: (newSandwich: Sandwich) => void;

    public checkFormValidity() {
        const valid = this.$refs.form.checkValidity();
        this.nameState = valid;
        return valid;
    }

    public resetModal() {
        this.name = '';
        this.nameState = null;
    }

    public handleOk(bvModalEvt: any) {
        // Prevent modal from closing
        bvModalEvt.preventDefault();
        // Trigger submit handler
        this.handleSubmit(this.name, this.addedIngredients);
    }

    public handleSubmit(name: string, ingredients: Ingredient[]) {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
            return;
        }
        const newSandwich: Sandwich = {
            sId: uuid.v1(),
            name,
            ingredients,
        };
        // Push the name to submitted names
        this.addSandwich(newSandwich);
        // Hide the modal manually
        this.$nextTick(() => {
            this.$refs.modal.hide();
        });
    }
}
