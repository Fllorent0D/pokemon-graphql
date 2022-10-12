import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput } from '../languages/languages-update-one-required-without-move-effect-prose-nested.input';
import { move_effectsUpdateOneRequiredWithoutMove_effect_proseNestedInput } from '../move-effects/move-effects-update-one-required-without-move-effect-prose-nested.input';

@InputType()
export class move_effect_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput;

    @Field(() => move_effectsUpdateOneRequiredWithoutMove_effect_proseNestedInput, {nullable:true})
    move_effects?: move_effectsUpdateOneRequiredWithoutMove_effect_proseNestedInput;
}
