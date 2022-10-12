import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_flag_proseNestedInput } from '../languages/languages-update-one-required-without-item-flag-prose-nested.input';

@InputType()
export class item_flag_proseUpdateWithoutItem_flagsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_flag_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_flag_proseNestedInput;
}
