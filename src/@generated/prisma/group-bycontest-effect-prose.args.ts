import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseWhereInput } from '../contest-effect-prose/contest-effect-prose-where.input';
import { Type } from 'class-transformer';
import { contest_effect_proseOrderByWithAggregationInput } from '../contest-effect-prose/contest-effect-prose-order-by-with-aggregation.input';
import { Contest_effect_proseScalarFieldEnum } from './contest-effect-prose-scalar-field.enum';
import { contest_effect_proseScalarWhereWithAggregatesInput } from '../contest-effect-prose/contest-effect-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycontestEffectProseArgs {

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    @Type(() => contest_effect_proseWhereInput)
    where?: contest_effect_proseWhereInput;

    @Field(() => [contest_effect_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<contest_effect_proseOrderByWithAggregationInput>;

    @Field(() => [Contest_effect_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Contest_effect_proseScalarFieldEnum>;

    @Field(() => contest_effect_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: contest_effect_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
