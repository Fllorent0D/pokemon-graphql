import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUncheckedUpdateWithoutSuper_contest_effect_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput;
}
