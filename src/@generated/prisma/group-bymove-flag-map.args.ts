import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapWhereInput } from '../move-flag-map/move-flag-map-where.input';
import { Type } from 'class-transformer';
import { move_flag_mapOrderByWithAggregationInput } from '../move-flag-map/move-flag-map-order-by-with-aggregation.input';
import { Move_flag_mapScalarFieldEnum } from './move-flag-map-scalar-field.enum';
import { move_flag_mapScalarWhereWithAggregatesInput } from '../move-flag-map/move-flag-map-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveFlagMapArgs {

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    @Type(() => move_flag_mapWhereInput)
    where?: move_flag_mapWhereInput;

    @Field(() => [move_flag_mapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_flag_mapOrderByWithAggregationInput>;

    @Field(() => [Move_flag_mapScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_flag_mapScalarFieldEnum>;

    @Field(() => move_flag_mapScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_flag_mapScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
