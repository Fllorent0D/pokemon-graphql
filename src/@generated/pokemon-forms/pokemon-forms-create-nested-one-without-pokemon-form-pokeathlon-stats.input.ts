import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-or-connect-without-pokemon-form-pokeathlon-stats.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class pokemon_formsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create?: pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput)
    connectOrCreate?: pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: pokemon_formsWhereUniqueInput;
}
