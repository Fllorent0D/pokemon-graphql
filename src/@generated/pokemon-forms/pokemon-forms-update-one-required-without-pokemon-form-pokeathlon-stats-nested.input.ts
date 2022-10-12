import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-create-or-connect-without-pokemon-form-pokeathlon-stats.input';
import { pokemon_formsUpsertWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-upsert-without-pokemon-form-pokeathlon-stats.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput } from './pokemon-forms-update-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokemon_formsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput {

    @Field(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create?: pokemon_formsCreateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput)
    connectOrCreate?: pokemon_formsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsUpsertWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsUpsertWithoutPokemon_form_pokeathlon_statsInput)
    upsert?: pokemon_formsUpsertWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput)
    update?: pokemon_formsUpdateWithoutPokemon_form_pokeathlon_statsInput;
}
