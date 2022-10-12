import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { itemsUpdateOneRequiredWithoutItem_flavor_summariesNestedInput } from '../items/items-update-one-required-without-item-flavor-summaries-nested.input';

@InputType()
export class item_flavor_summariesUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_flavor_summariesNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_flavor_summariesNestedInput;
}
