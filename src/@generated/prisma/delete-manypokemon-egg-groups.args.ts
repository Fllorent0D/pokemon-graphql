import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereInput } from '../pokemon-egg-groups/pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    @Type(() => pokemon_egg_groupsWhereInput)
    where?: pokemon_egg_groupsWhereInput;
}
