import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-create-without-pokemon-forms.input';

@InputType()
export class pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput {

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput)
    create!: pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput;
}
