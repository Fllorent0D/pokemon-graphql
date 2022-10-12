import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_fling_effectsUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput } from '../item-fling-effects/item-fling-effects-update-one-required-without-item-fling-effect-prose-nested.input';

@InputType()
export class item_fling_effect_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => item_fling_effectsUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput, {nullable:true})
    item_fling_effects?: item_fling_effectsUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput;
}
