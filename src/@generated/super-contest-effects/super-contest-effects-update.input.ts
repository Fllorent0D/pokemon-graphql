import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateManyWithoutSuper_contest_effectsNestedInput } from '../moves/moves-update-many-without-super-contest-effects-nested.input';
import { super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUpdateInput {

    @Field(() => movesUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutSuper_contest_effectsNestedInput;

    @Field(() => super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUpdateManyWithoutSuper_contest_effectsNestedInput;
}
