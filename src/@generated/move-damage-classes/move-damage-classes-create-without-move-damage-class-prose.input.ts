import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedManyWithoutMove_damage_classesInput } from '../moves/moves-create-nested-many-without-move-damage-classes.input';
import { statsCreateNestedManyWithoutMove_damage_classesInput } from '../stats/stats-create-nested-many-without-move-damage-classes.input';
import { typesCreateNestedManyWithoutMove_damage_classesInput } from '../types/types-create-nested-many-without-move-damage-classes.input';

@InputType()
export class move_damage_classesCreateWithoutMove_damage_class_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => movesCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => statsCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    stats?: statsCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => typesCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    types?: typesCreateNestedManyWithoutMove_damage_classesInput;
}
