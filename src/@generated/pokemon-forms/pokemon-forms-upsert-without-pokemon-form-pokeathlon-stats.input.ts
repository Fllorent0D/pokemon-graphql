import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-update-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokemon_formsUpsertWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput)
    update!: pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create!: pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput;
}
