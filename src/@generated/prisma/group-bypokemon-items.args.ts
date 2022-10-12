import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsWhereInput } from '../pokemon-items/pokemon-items-where.input';
import { Type } from 'class-transformer';
import { pokemon_itemsOrderByWithAggregationInput } from '../pokemon-items/pokemon-items-order-by-with-aggregation.input';
import { Pokemon_itemsScalarFieldEnum } from './pokemon-items-scalar-field.enum';
import { pokemon_itemsScalarWhereWithAggregatesInput } from '../pokemon-items/pokemon-items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonItemsArgs {

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    @Type(() => pokemon_itemsWhereInput)
    where?: pokemon_itemsWhereInput;

    @Field(() => [pokemon_itemsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_itemsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_itemsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_itemsScalarFieldEnum>;

    @Field(() => pokemon_itemsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_itemsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
