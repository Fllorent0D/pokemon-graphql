import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereUniqueInput } from '../pokemon-egg-groups/pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    where!: pokemon_egg_groupsWhereUniqueInput;
}
