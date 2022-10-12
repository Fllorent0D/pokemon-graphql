import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesUpdateWithoutPokemon_speciesInput } from './pokemon-shapes-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateWithoutPokemon_speciesInput } from './pokemon-shapes-create-without-pokemon-species.input';

@InputType()
export class pokemon_shapesUpsertWithoutPokemon_speciesInput {

    @Field(() => pokemon_shapesUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_shapesUpdateWithoutPokemon_speciesInput)
    update!: pokemon_shapesUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_shapesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_shapesCreateWithoutPokemon_speciesInput)
    create!: pokemon_shapesCreateWithoutPokemon_speciesInput;
}
