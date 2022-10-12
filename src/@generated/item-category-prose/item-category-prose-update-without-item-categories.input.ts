import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_category_proseNestedInput } from '../languages/languages-update-one-required-without-item-category-prose-nested.input';

@InputType()
export class item_category_proseUpdateWithoutItem_categoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_category_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_category_proseNestedInput;
}
