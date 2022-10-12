import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseUpdateManyWithoutContest_effectsNestedInput } from '../contest-effect-prose/contest-effect-prose-update-many-without-contest-effects-nested.input';

@InputType()
export class contest_effectsUpdateWithoutMovesInput {

    @Field(() => contest_effect_proseUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseUpdateManyWithoutContest_effectsNestedInput;
}
