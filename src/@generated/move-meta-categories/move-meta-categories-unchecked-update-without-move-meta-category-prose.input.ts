import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-move-meta-categories-nested.input';

@InputType()
export class move_meta_categoriesUncheckedUpdateWithoutMove_meta_category_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput, {nullable:true})
    move_meta?: move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput;
}
