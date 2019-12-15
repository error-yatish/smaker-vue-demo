import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import Ingredient from '@/types/Ingredient';

@Module({
    namespaced: true,
})
class IngredientsModule extends VuexModule {
    public ingredients: Ingredient[] = [
        { id: 1, name: 'Turkey' },
        { id: 2, name: 'Bananas' },
        { id: 3, name: 'Nut butter or SunButter' },
        { id: 4, name: 'Tomatoes' },
        { id: 5, name: 'Whole wheat bread' },
        { id: 6, name: 'Wraps' },
        { id: 7, name: 'Waffles' },
        { id: 8, name: 'Hummus' },
        { id: 9, name: 'Cheddar cheese' },
        { id: 10, name: 'Baby spinach' },
        { id: 11, name: 'Green and Red Apples' },
        { id: 12, name: 'Jam or jelly' },
    ];

    public addedIngredients: Ingredient[] = [];
}

export default IngredientsModule;
