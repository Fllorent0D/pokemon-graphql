import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput } from '../languages/languages-update-one-required-without-move-meta-category-prose-nested.input';

@InputType()
export class move_meta_category_proseUpdateWithoutMove_meta_categoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput;
}
