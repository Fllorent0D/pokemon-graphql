import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsUpdateWithoutPokemon_form_namesInput } from './pokemon-forms-update-without-pokemon-form-names.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateWithoutPokemon_form_namesInput } from './pokemon-forms-create-without-pokemon-form-names.input';

@InputType()
export class pokemon_formsUpsertWithoutPokemon_form_namesInput {

    @Field(() => pokemon_formsUpdateWithoutPokemon_form_namesInput, {nullable:false})
    @Type(() => pokemon_formsUpdateWithoutPokemon_form_namesInput)
    update!: pokemon_formsUpdateWithoutPokemon_form_namesInput;

    @Field(() => pokemon_formsCreateWithoutPokemon_form_namesInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_namesInput)
    create!: pokemon_formsCreateWithoutPokemon_form_namesInput;
}
