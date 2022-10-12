import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_damage_class_proseUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../move-damage-class-prose/move-damage-class-prose-unchecked-create-nested-many-without-move-damage-classes.input';
import { statsUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../stats/stats-unchecked-create-nested-many-without-move-damage-classes.input';
import { typesUncheckedCreateNestedManyWithoutMove_damage_classesInput } from '../types/types-unchecked-create-nested-many-without-move-damage-classes.input';

@InputType()
export class move_damage_classesUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_damage_class_proseUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUncheckedCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => statsUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    stats?: statsUncheckedCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => typesUncheckedCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    types?: typesUncheckedCreateNestedManyWithoutMove_damage_classesInput;
}
