import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_proseNestedInput } from '../languages/languages-update-one-required-without-item-prose-nested.input';

@InputType()
export class item_proseUpdateWithoutItemsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_proseNestedInput;
}
