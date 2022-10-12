import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_damage_class_proseUncheckedUpdateManyWithoutMove_damage_classesNestedInput } from '../move-damage-class-prose/move-damage-class-prose-unchecked-update-many-without-move-damage-classes-nested.input';
import { movesUncheckedUpdateManyWithoutMove_damage_classesNestedInput } from '../moves/moves-unchecked-update-many-without-move-damage-classes-nested.input';
import { statsUncheckedUpdateManyWithoutMove_damage_classesNestedInput } from '../stats/stats-unchecked-update-many-without-move-damage-classes-nested.input';
import { typesUncheckedUpdateManyWithoutMove_damage_classesNestedInput } from '../types/types-unchecked-update-many-without-move-damage-classes-nested.input';

@InputType()
export class move_damage_classesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_damage_class_proseUncheckedUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUncheckedUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => statsUncheckedUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    stats?: statsUncheckedUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => typesUncheckedUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    types?: typesUncheckedUpdateManyWithoutMove_damage_classesNestedInput;
}
