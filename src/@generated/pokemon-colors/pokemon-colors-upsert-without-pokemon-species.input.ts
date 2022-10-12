import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsUpdateWithoutPokemon_speciesInput } from './pokemon-colors-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateWithoutPokemon_speciesInput } from './pokemon-colors-create-without-pokemon-species.input';

@InputType()
export class pokemon_colorsUpsertWithoutPokemon_speciesInput {

    @Field(() => pokemon_colorsUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_colorsUpdateWithoutPokemon_speciesInput)
    update!: pokemon_colorsUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_colorsCreateWithoutPokemon_speciesInput)
    create!: pokemon_colorsCreateWithoutPokemon_speciesInput;
}
