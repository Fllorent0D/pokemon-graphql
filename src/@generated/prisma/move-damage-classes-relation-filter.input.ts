import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesWhereInput } from '../move-damage-classes/move-damage-classes-where.input';

@InputType()
export class Move_damage_classesRelationFilter {

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    is?: move_damage_classesWhereInput;

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    isNot?: move_damage_classesWhereInput;
}
