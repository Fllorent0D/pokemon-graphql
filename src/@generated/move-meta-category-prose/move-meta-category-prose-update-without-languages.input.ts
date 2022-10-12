import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput } from '../move-meta-categories/move-meta-categories-update-one-required-without-move-meta-category-prose-nested.input';

@InputType()
export class move_meta_category_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput, {nullable:true})
    move_meta_categories?: move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput;
}
