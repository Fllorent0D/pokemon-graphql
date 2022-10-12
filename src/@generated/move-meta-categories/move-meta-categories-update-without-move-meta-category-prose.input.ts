import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_metaUpdateManyWithoutMove_meta_categoriesNestedInput } from '../move-meta/move-meta-update-many-without-move-meta-categories-nested.input';

@InputType()
export class move_meta_categoriesUpdateWithoutMove_meta_category_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_metaUpdateManyWithoutMove_meta_categoriesNestedInput, {nullable:true})
    move_meta?: move_metaUpdateManyWithoutMove_meta_categoriesNestedInput;
}
