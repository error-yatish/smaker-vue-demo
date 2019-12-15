<template>
  <b-container class="home">
    <NewSandwich />
    <SandwichListComp />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IngredientListComp from '@/components/IngredientListComp.ts';
import NewSandwich from '@/components/NewSandwich.ts';
import SandwichListComp from '@/components/SandwichListComp.ts';

@Component({
  components: {
    NewSandwich,
    IngredientListComp,
    SandwichListComp
  },
})
export default class Home extends Vue {}
</script>
