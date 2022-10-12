import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereUniqueInput } from '../pokemon-egg-groups/pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateInput } from '../pokemon-egg-groups/pokemon-egg-groups-create.input';
import { pokemon_egg_groupsUpdateInput } from '../pokemon-egg-groups/pokemon-egg-groups-update.input';

@ArgsType()
export class UpsertOnepokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    where!: pokemon_egg_groupsWhereUniqueInput;

    @Field(() => pokemon_egg_groupsCreateInput, {nullable:false})
    @Type(() => pokemon_egg_groupsCreateInput)
    create!: pokemon_egg_groupsCreateInput;

    @Field(() => pokemon_egg_groupsUpdateInput, {nullable:false})
    @Type(() => pokemon_egg_groupsUpdateInput)
    update!: pokemon_egg_groupsUpdateInput;
}
