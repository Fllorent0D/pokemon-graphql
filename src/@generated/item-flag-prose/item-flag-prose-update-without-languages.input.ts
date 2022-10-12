import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { item_flagsUpdateOneRequiredWithoutItem_flag_proseNestedInput } from '../item-flags/item-flags-update-one-required-without-item-flag-prose-nested.input';

@InputType()
export class item_flag_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => item_flagsUpdateOneRequiredWithoutItem_flag_proseNestedInput, {nullable:true})
    item_flags?: item_flagsUpdateOneRequiredWithoutItem_flag_proseNestedInput;
}
