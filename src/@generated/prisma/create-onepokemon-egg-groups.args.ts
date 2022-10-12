import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateInput } from '../pokemon-egg-groups/pokemon-egg-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsCreateInput, {nullable:false})
    @Type(() => pokemon_egg_groupsCreateInput)
    data!: pokemon_egg_groupsCreateInput;
}
