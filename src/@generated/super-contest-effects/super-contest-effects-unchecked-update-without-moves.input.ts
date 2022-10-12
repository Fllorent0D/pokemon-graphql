import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-unchecked-update-many-without-super-contest-effects-nested.input';

@InputType()
export class super_contest_effectsUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUncheckedUpdateManyWithoutSuper_contest_effectsNestedInput;
}
