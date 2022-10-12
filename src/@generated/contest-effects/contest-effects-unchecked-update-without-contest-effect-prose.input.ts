import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { movesUncheckedUpdateManyWithoutContest_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-contest-effects-nested.input';

@InputType()
export class contest_effectsUncheckedUpdateWithoutContest_effect_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => movesUncheckedUpdateManyWithoutContest_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutContest_effectsNestedInput;
}
