import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereInput } from '../pokemon-egg-groups/pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsOrderByWithRelationInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-with-relation.input';
import { pokemon_egg_groupsWhereUniqueInput } from '../pokemon-egg-groups/pokemon-egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_egg_groupsScalarFieldEnum } from './pokemon-egg-groups-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    @Type(() => pokemon_egg_groupsWhereInput)
    where?: pokemon_egg_groupsWhereInput;

    @Field(() => [pokemon_egg_groupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_egg_groupsOrderByWithRelationInput>;

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_egg_groupsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_egg_groupsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_egg_groupsScalarFieldEnum>;
}
