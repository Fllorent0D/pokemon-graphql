import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput } from '../languages/languages-update-one-required-without-move-damage-class-prose-nested.input';
import { move_damage_classesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput } from '../move-damage-classes/move-damage-classes-update-one-required-without-move-damage-class-prose-nested.input';

@InputType()
export class move_damage_class_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput;

    @Field(() => move_damage_classesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput, {nullable:true})
    move_damage_classes?: move_damage_classesUpdateOneRequiredWithoutMove_damage_class_proseNestedInput;
}
