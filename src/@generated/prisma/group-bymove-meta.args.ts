import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';
import { Type } from 'class-transformer';
import { move_metaOrderByWithAggregationInput } from '../move-meta/move-meta-order-by-with-aggregation.input';
import { Move_metaScalarFieldEnum } from './move-meta-scalar-field.enum';
import { move_metaScalarWhereWithAggregatesInput } from '../move-meta/move-meta-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveMetaArgs {

    @Field(() => move_metaWhereInput, {nullable:true})
    @Type(() => move_metaWhereInput)
    where?: move_metaWhereInput;

    @Field(() => [move_metaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_metaOrderByWithAggregationInput>;

    @Field(() => [Move_metaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_metaScalarFieldEnum>;

    @Field(() => move_metaScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_metaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
