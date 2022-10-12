import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseUpdateManyWithoutContest_effectsNestedInput } from '../contest-effect-prose/contest-effect-prose-update-many-without-contest-effects-nested.input';
import { movesUpdateManyWithoutContest_effectsNestedInput } from '../moves/moves-update-many-without-contest-effects-nested.input';

@InputType()
export class contest_effectsUpdateInput {

    @Field(() => contest_effect_proseUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseUpdateManyWithoutContest_effectsNestedInput;

    @Field(() => movesUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutContest_effectsNestedInput;
}
