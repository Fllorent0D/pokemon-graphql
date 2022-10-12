import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';
import { Type } from 'class-transformer';
import { pokemon_speciesOrderByWithAggregationInput } from '../pokemon-species/pokemon-species-order-by-with-aggregation.input';
import { Pokemon_speciesScalarFieldEnum } from './pokemon-species-scalar-field.enum';
import { pokemon_speciesScalarWhereWithAggregatesInput } from '../pokemon-species/pokemon-species-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonSpeciesArgs {

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    @Type(() => pokemon_speciesWhereInput)
    where?: pokemon_speciesWhereInput;

    @Field(() => [pokemon_speciesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_speciesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_speciesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_speciesScalarFieldEnum>;

    @Field(() => pokemon_speciesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_speciesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
