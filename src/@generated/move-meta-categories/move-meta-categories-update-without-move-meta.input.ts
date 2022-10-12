import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_meta_category_proseUpdateManyWithoutMove_meta_categoriesNestedInput } from '../move-meta-category-prose/move-meta-category-prose-update-many-without-move-meta-categories-nested.input';

@InputType()
export class move_meta_categoriesUpdateWithoutMove_metaInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_meta_category_proseUpdateManyWithoutMove_meta_categoriesNestedInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseUpdateManyWithoutMove_meta_categoriesNestedInput;
}
