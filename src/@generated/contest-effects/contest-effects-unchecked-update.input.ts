import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { contest_effect_proseUncheckedUpdateManyWithoutContest_effectsNestedInput } from '../contest-effect-prose/contest-effect-prose-unchecked-update-many-without-contest-effects-nested.input';
import { movesUncheckedUpdateManyWithoutContest_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-contest-effects-nested.input';

@InputType()
export class contest_effectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => contest_effect_proseUncheckedUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseUncheckedUpdateManyWithoutContest_effectsNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutContest_effectsNestedInput;
}
