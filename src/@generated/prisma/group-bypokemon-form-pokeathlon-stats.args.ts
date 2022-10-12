import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsOrderByWithAggregationInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-order-by-with-aggregation.input';
import { Pokemon_form_pokeathlon_statsScalarFieldEnum } from './pokemon-form-pokeathlon-stats-scalar-field.enum';
import { pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereInput)
    where?: pokemon_form_pokeathlon_statsWhereInput;

    @Field(() => [pokemon_form_pokeathlon_statsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_form_pokeathlon_statsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_form_pokeathlon_statsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_form_pokeathlon_statsScalarFieldEnum>;

    @Field(() => pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
