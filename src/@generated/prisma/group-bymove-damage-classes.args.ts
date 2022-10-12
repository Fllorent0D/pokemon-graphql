import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesWhereInput } from '../move-damage-classes/move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { move_damage_classesOrderByWithAggregationInput } from '../move-damage-classes/move-damage-classes-order-by-with-aggregation.input';
import { Move_damage_classesScalarFieldEnum } from './move-damage-classes-scalar-field.enum';
import { move_damage_classesScalarWhereWithAggregatesInput } from '../move-damage-classes/move-damage-classes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveDamageClassesArgs {

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    @Type(() => move_damage_classesWhereInput)
    where?: move_damage_classesWhereInput;

    @Field(() => [move_damage_classesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_damage_classesOrderByWithAggregationInput>;

    @Field(() => [Move_damage_classesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_damage_classesScalarFieldEnum>;

    @Field(() => move_damage_classesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_damage_classesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
