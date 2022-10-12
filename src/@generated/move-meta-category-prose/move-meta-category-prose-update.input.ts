import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput } from '../languages/languages-update-one-required-without-move-meta-category-prose-nested.input';
import { move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput } from '../move-meta-categories/move-meta-categories-update-one-required-without-move-meta-category-prose-nested.input';

@InputType()
export class move_meta_category_proseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput;

    @Field(() => move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput, {nullable:true})
    move_meta_categories?: move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput;
}
