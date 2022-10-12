import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput } from '../moves/moves-unchecked-update-many-without-super-contest-effects-nested.input';
import { super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-unchecked-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput;

    @Field(() => super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput;
}
