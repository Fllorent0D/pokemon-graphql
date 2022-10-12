import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_damage_class_proseUpdateManyWithoutMove_damage_classesNestedInput } from '../move-damage-class-prose/move-damage-class-prose-update-many-without-move-damage-classes-nested.input';
import { statsUpdateManyWithoutMove_damage_classesNestedInput } from '../stats/stats-update-many-without-move-damage-classes-nested.input';
import { typesUpdateManyWithoutMove_damage_classesNestedInput } from '../types/types-update-many-without-move-damage-classes-nested.input';

@InputType()
export class move_damage_classesUpdateWithoutMovesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_damage_class_proseUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => statsUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    stats?: statsUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => typesUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    types?: typesUpdateManyWithoutMove_damage_classesNestedInput;
}
