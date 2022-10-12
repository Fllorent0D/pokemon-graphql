import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_egg_groupsUncheckedUpdateManyInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsWhereInput } from '../pokemon-egg-groups/pokemon-egg-groups-where.input';

@ArgsType()
export class UpdateManypokemonEggGroupsArgs {

    @Field(() => pokemon_egg_groupsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => pokemon_egg_groupsUncheckedUpdateManyInput)
    data!: pokemon_egg_groupsUncheckedUpdateManyInput;

    @Field(() => pokemon_egg_groupsWhereInput, {nullable:true})
    @Type(() => pokemon_egg_groupsWhereInput)
    where?: pokemon_egg_groupsWhereInput;
}
