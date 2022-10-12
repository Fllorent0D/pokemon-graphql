import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseWhereInput } from '../move-damage-class-prose/move-damage-class-prose-where.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseOrderByWithAggregationInput } from '../move-damage-class-prose/move-damage-class-prose-order-by-with-aggregation.input';
import { Move_damage_class_proseScalarFieldEnum } from './move-damage-class-prose-scalar-field.enum';
import { move_damage_class_proseScalarWhereWithAggregatesInput } from '../move-damage-class-prose/move-damage-class-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    @Type(() => move_damage_class_proseWhereInput)
    where?: move_damage_class_proseWhereInput;

    @Field(() => [move_damage_class_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_damage_class_proseOrderByWithAggregationInput>;

    @Field(() => [Move_damage_class_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_damage_class_proseScalarFieldEnum>;

    @Field(() => move_damage_class_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_damage_class_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
