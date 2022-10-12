import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-move-meta-categories-nested.input';
import { move_meta_category_proseUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput } from '../move-meta-category-prose/move-meta-category-prose-unchecked-update-many-without-move-meta-categories-nested.input';

@InputType()
export class move_meta_categoriesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput, {nullable:true})
    move_meta?: move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput;

    @Field(() => move_meta_category_proseUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput;
}
