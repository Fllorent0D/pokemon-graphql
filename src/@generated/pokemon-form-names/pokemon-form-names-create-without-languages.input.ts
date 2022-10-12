import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateNestedOneWithoutPokemon_form_namesInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-pokemon-form-names.input';

@InputType()
export class pokemon_form_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    pokemon_name?: string;

    @Field(() => pokemon_formsCreateNestedOneWithoutPokemon_form_namesInput, {nullable:false})
    pokemon_forms!: pokemon_formsCreateNestedOneWithoutPokemon_form_namesInput;
}
