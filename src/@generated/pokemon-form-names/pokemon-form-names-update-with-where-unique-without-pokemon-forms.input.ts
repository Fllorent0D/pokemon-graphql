import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesUpdateWithoutPokemon_formsInput } from './pokemon-form-names-update-without-pokemon-forms.input';

@InputType()
export class pokemon_form_namesUpdateWithWhereUniqueWithoutPokemon_formsInput {

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;

    @Field(() => pokemon_form_namesUpdateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateWithoutPokemon_formsInput)
    data!: pokemon_form_namesUpdateWithoutPokemon_formsInput;
}
