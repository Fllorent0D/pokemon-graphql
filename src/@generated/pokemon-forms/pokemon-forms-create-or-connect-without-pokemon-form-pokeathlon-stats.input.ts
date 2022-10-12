import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create!: pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput;
}
