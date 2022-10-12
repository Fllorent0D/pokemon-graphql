import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { egg_groups } from '../egg-groups/egg-groups.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';

@ObjectType()
export class pokemon_egg_groups {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => egg_groups, {nullable:false})
    egg_groups?: egg_groups;

    @Field(() => pokemon_species, {nullable:false})
    pokemon_species?: pokemon_species;
}
