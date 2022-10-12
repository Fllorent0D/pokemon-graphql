import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseWhereInput } from '../pokedex-prose/pokedex-prose-where.input';
import { Type } from 'class-transformer';
import { pokedex_proseOrderByWithAggregationInput } from '../pokedex-prose/pokedex-prose-order-by-with-aggregation.input';
import { Pokedex_proseScalarFieldEnum } from './pokedex-prose-scalar-field.enum';
import { pokedex_proseScalarWhereWithAggregatesInput } from '../pokedex-prose/pokedex-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokedexProseArgs {

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    @Type(() => pokedex_proseWhereInput)
    where?: pokedex_proseWhereInput;

    @Field(() => [pokedex_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokedex_proseOrderByWithAggregationInput>;

    @Field(() => [Pokedex_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokedex_proseScalarFieldEnum>;

    @Field(() => pokedex_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokedex_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
