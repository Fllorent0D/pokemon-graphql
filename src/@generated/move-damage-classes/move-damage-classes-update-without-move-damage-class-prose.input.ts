import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { movesUpdateManyWithoutMove_damage_classesNestedInput } from '../moves/moves-update-many-without-move-damage-classes-nested.input';
import { statsUpdateManyWithoutMove_damage_classesNestedInput } from '../stats/stats-update-many-without-move-damage-classes-nested.input';
import { typesUpdateManyWithoutMove_damage_classesNestedInput } from '../types/types-update-many-without-move-damage-classes-nested.input';

@InputType()
export class move_damage_classesUpdateWithoutMove_damage_class_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => movesUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => statsUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    stats?: statsUpdateManyWithoutMove_damage_classesNestedInput;

    @Field(() => typesUpdateManyWithoutMove_damage_classesNestedInput, {nullable:true})
    types?: typesUpdateManyWithoutMove_damage_classesNestedInput;
}
