import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput } from '../languages/languages-update-one-required-without-item-fling-effect-prose-nested.input';

@InputType()
export class item_fling_effect_proseUpdateWithoutItem_fling_effectsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput;
}
