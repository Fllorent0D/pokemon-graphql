import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { movesUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../moves/moves-unchecked-create-nested-many-without-move-damage-classes.input';
import { statsUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../stats/stats-unchecked-create-nested-many-without-move-damage-classes.input';
import { typesUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../types/types-unchecked-create-nested-many-without-move-damage-classes.input';

@InputType()
export class move_damage_classesUncheckedCreateWithoutMove_damage_class_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => movesUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => statsUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    stats?: statsUncheckedCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => typesUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    types?: typesUncheckedCreateNestedManyWithoutMove_damage_classesInput;
}
