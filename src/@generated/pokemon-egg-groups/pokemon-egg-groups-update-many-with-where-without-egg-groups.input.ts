import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_egg_groupsInput } from './pokemon-egg-groups-unchecked-update-many-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_egg_groupsUpdateManyWithWhereWithoutEgg_groupsInput {

    @Field(() => pokemon_egg_groupsScalarWhereInput, {nullable:false})
    @Type(() => pokemon_egg_groupsScalarWhereInput)
    where!: pokemon_egg_groupsScalarWhereInput;

    @Field(() => pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_egg_groupsInput)
    data!: pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_egg_groupsInput;
}
