import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_formsInput } from './pokemon-update-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_formsInput } from './pokemon-create-without-pokemon-forms.input';

@InputType()
export class pokemonUpsertWithoutPokemon_formsInput {

    @Field(() => pokemonUpdateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_formsInput)
    update!: pokemonUpdateWithoutPokemon_formsInput;

    @Field(() => pokemonCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_formsInput)
    create!: pokemonCreateWithoutPokemon_formsInput;
}
