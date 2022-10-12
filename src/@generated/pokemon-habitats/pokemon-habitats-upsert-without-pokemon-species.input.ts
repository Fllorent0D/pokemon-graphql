import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsUpdateWithoutPokemon_speciesInput } from './pokemon-habitats-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateWithoutPokemon_speciesInput } from './pokemon-habitats-create-without-pokemon-species.input';

@InputType()
export class pokemon_habitatsUpsertWithoutPokemon_speciesInput {

    @Field(() => pokemon_habitatsUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_habitatsUpdateWithoutPokemon_speciesInput)
    update!: pokemon_habitatsUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_habitatsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_speciesInput)
    create!: pokemon_habitatsCreateWithoutPokemon_speciesInput;
}
