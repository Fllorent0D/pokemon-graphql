import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesOrderByWithAggregationInput } from '../pokemon-abilities/pokemon-abilities-order-by-with-aggregation.input';
import { Pokemon_abilitiesScalarFieldEnum } from './pokemon-abilities-scalar-field.enum';
import { pokemon_abilitiesScalarWhereWithAggregatesInput } from '../pokemon-abilities/pokemon-abilities-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    @Type(() => pokemon_abilitiesWhereInput)
    where?: pokemon_abilitiesWhereInput;

    @Field(() => [pokemon_abilitiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_abilitiesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_abilitiesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_abilitiesScalarFieldEnum>;

    @Field(() => pokemon_abilitiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_abilitiesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
