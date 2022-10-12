import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsUpdateInput } from '../pokemon-egg-groups/pokemon-egg-groups-update.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsWhereUniqueInput } from '../pokemon-egg-groups/pokemon-egg-groups-where-unique.input';

@ArgsType()
export class UpdateOnepokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsUpdateInput, {nullable:false})
    @Type(() => pokemon_egg_groupsUpdateInput)
    data!: pokemon_egg_groupsUpdateInput;

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    where!: pokemon_egg_groupsWhereUniqueInput;
}
