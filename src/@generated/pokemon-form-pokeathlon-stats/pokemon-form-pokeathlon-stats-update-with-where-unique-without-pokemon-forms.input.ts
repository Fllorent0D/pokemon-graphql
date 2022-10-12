import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsUpdateWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-update-without-pokemon-forms.input';

@InputType()
export class pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokemon_formsInput {

    @Field(() => pokemon_form_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    where!: pokemon_form_pokeathlon_statsWhereUniqueInput;

    @Field(() => pokemon_form_pokeathlon_statsUpdateWithoutPokemon_formsInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsUpdateWithoutPokemon_formsInput)
    data!: pokemon_form_pokeathlon_statsUpdateWithoutPokemon_formsInput;
}
