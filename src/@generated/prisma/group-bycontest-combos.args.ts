import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosWhereInput } from '../contest-combos/contest-combos-where.input';
import { Type } from 'class-transformer';
import { contest_combosOrderByWithAggregationInput } from '../contest-combos/contest-combos-order-by-with-aggregation.input';
import { Contest_combosScalarFieldEnum } from './contest-combos-scalar-field.enum';
import { contest_combosScalarWhereWithAggregatesInput } from '../contest-combos/contest-combos-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycontestCombosArgs {

    @Field(() => contest_combosWhereInput, {nullable:true})
    @Type(() => contest_combosWhereInput)
    where?: contest_combosWhereInput;

    @Field(() => [contest_combosOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<contest_combosOrderByWithAggregationInput>;

    @Field(() => [Contest_combosScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Contest_combosScalarFieldEnum>;

    @Field(() => contest_combosScalarWhereWithAggregatesInput, {nullable:true})
    having?: contest_combosScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
