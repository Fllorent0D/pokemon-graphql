import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_form_namesInput } from '../languages/languages-create-nested-one-without-pokemon-form-names.input';

@InputType()
export class pokemon_form_namesCreateWithoutPokemon_formsInput {

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    pokemon_name?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_form_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_form_namesInput;
}
