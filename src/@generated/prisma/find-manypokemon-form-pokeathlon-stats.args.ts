import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsOrderByWithRelationInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-order-by-with-relation.input';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_form_pokeathlon_statsScalarFieldEnum } from './pokemon-form-pokeathlon-stats-scalar-field.enum';

@ArgsType()
export class FindManypokemonFormPokeathlonStatsArgs {

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereInput)
    where?: pokemon_form_pokeathlon_statsWhereInput;

    @Field(() => [pokemon_form_pokeathlon_statsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_form_pokeathlon_statsOrderByWithRelationInput>;

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_form_pokeathlon_statsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_form_pokeathlon_statsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_form_pokeathlon_statsScalarFieldEnum>;
}
