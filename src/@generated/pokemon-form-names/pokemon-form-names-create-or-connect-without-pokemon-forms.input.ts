import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateWithoutPokemon_formsInput } from './pokemon-form-names-create-without-pokemon-forms.input';

@InputType()
export class pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput {

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;

    @Field(() => pokemon_form_namesCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemon_form_namesCreateWithoutPokemon_formsInput)
    create!: pokemon_form_namesCreateWithoutPokemon_formsInput;
}
