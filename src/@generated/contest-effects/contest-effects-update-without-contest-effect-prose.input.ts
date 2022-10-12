import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateManyWithoutContest_effectsNestedInput } from '../moves/moves-update-many-without-contest-effects-nested.input';

@InputType()
export class contest_effectsUpdateWithoutContest_effect_proseInput {

    @Field(() => movesUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutContest_effectsNestedInput;
}
