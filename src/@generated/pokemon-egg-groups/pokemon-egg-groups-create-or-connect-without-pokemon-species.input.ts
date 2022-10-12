import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateWithoutPokemon_speciesInput } from './pokemon-egg-groups-create-without-pokemon-species.input';

@InputType()
export class pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    where!: pokemon_egg_groupsWhereUniqueInput;

    @Field(() => pokemon_egg_groupsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_egg_groupsCreateWithoutPokemon_speciesInput)
    create!: pokemon_egg_groupsCreateWithoutPokemon_speciesInput;
}
