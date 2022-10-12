import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereInput } from '../pokemon-egg-groups/pokemon-egg-groups-where.input';

@InputType()
export class Pokemon_egg_groupsListRelationFilter {

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    every?: pokemon_egg_groupsWhereInput;

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    some?: pokemon_egg_groupsWhereInput;

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    none?: pokemon_egg_groupsWhereInput;
}
