import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import WithRender from './sandwiches.html';

import Sandwich from '@/types/Sandwich';

const sandwichesModule = namespace('SandwichesModule');

@WithRender
@Component
export default class SandwichListComp extends Vue {

  @sandwichesModule.State
  public sandwiches!: Sandwich[];

  @sandwichesModule.Mutation
  public deleteSandwich!: (sandwichId: string) => void;

  public showDisposeMsg(sandwichId: string) {
    this.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
      title: 'Please Confirm',
      size: 'sm',
      buttonSize: 'sm',
      okVariant: 'danger',
      okTitle: 'YES',
      cancelTitle: 'NO',
      footerClass: 'p-2',
      centered: true,
    })
      .then((value: boolean) => {
        if (value) {
          this.deleteSandwich(sandwichId)
        }
      })
      .catch(err => {
        // An error occurred
      });
  }
}
