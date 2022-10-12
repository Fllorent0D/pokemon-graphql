import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateManyWithoutSuper_contest_effectsNestedInput } from '../moves/moves-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUpdateWithoutSuper_contest_effect_proseInput {

    @Field(() => movesUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutSuper_contest_effectsNestedInput;
}
