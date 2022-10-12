import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { itemsUpdateOneRequiredWithoutItem_proseNestedInput } from '../items/items-update-one-required-without-item-prose-nested.input';

@InputType()
export class item_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_proseNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_proseNestedInput;
}
