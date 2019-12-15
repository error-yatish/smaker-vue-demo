import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import Sandwich from '@/types/Sandwich';
import { uuid } from 'vue-uuid';

@Module({
    namespaced: true,
})
class SandwichesModule extends VuexModule {
    public sandwiches: Sandwich[] = [
        { sId: uuid.v1(), name: 'Mixed Vegetable and Cheese Sandwich', ingredients: [
            { id: 2, name: 'Bananas' },
            { id: 4, name: 'Tomatoes' },
            { id: 7, name: 'Waffles' },
        ] },
        { sId: uuid.v1(), name: 'Bagel toast', ingredients: [
            { id: 4, name: 'Tomatoes' },
            { id: 6, name: 'Wraps' },
            { id: 2, name: 'Bananas' },
            { id: 11, name: 'Green and Red Apples' },
        ] },
        { sId: uuid.v1(), name: 'Bacon', ingredients: [
            { id: 6, name: 'Wraps' },
            { id: 8, name: 'Hummus' },
        ] },
        { sId: uuid.v1(), name: 'Baloney (Bologna) salad sandwich', ingredients: [
            { id: 5, name: 'Whole wheat bread' },
            { id: 3, name: 'Nut butter or SunButter' },
            { id: 2, name: 'Bananas' },
        ] },
        { sId: uuid.v1(), name: 'Barros Jarpa', ingredients: [
            { id: 7, name: 'Waffles' },
            { id: 12, name: 'Jam or jelly' },
        ] },
    ];

    @Mutation
    public addSandwich(newSandwich: Sandwich) {
        this.sandwiches.push(newSandwich);
    }

    @Mutation
    public deleteSandwich(sandwichId: string) {
        this.sandwiches = this.sandwiches.filter((sandwich) => sandwich.sId !== sandwichId);
    }
}

export default SandwichesModule;
