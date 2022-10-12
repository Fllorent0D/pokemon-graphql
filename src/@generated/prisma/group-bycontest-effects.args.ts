import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';
import { Type } from 'class-transformer';
import { contest_effectsOrderByWithAggregationInput } from '../contest-effects/contest-effects-order-by-with-aggregation.input';
import { Contest_effectsScalarFieldEnum } from './contest-effects-scalar-field.enum';
import { contest_effectsScalarWhereWithAggregatesInput } from '../contest-effects/contest-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycontestEffectsArgs {

    @Field(() => contest_effectsWhereInput, {nullable:true})
    @Type(() => contest_effectsWhereInput)
    where?: contest_effectsWhereInput;

    @Field(() => [contest_effectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<contest_effectsOrderByWithAggregationInput>;

    @Field(() => [Contest_effectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Contest_effectsScalarFieldEnum>;

    @Field(() => contest_effectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: contest_effectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
