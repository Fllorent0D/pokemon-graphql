import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_egg_groupsInput } from './pokemon-species-update-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_egg_groupsInput } from './pokemon-species-create-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_egg_groupsInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_egg_groupsInput)
    update!: pokemon_speciesUpdateWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput)
    create!: pokemon_speciesCreateWithoutPokemon_egg_groupsInput;
}
