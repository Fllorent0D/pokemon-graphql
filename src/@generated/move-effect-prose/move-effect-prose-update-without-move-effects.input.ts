import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput } from '../languages/languages-update-one-required-without-move-effect-prose-nested.input';

@InputType()
export class move_effect_proseUpdateWithoutMove_effectsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_effect_proseNestedInput;
}
