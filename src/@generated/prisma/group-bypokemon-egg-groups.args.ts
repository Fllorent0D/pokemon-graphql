import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereInput } from '../pokemon-egg-groups/pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsOrderByWithAggregationInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-with-aggregation.input';
import { Pokemon_egg_groupsScalarFieldEnum } from './pokemon-egg-groups-scalar-field.enum';
import { pokemon_egg_groupsScalarWhereWithAggregatesInput } from '../pokemon-egg-groups/pokemon-egg-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    @Type(() => pokemon_egg_groupsWhereInput)
    where?: pokemon_egg_groupsWhereInput;

    @Field(() => [pokemon_egg_groupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_egg_groupsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_egg_groupsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_egg_groupsScalarFieldEnum>;

    @Field(() => pokemon_egg_groupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_egg_groupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
