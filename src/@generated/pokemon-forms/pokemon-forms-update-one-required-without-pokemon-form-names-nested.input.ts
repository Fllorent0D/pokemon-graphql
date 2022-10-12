import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutPokemon_form_namesInput } from './pokemon-forms-create-without-pokemon-form-names.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutPokemon_form_namesInput } from './pokemon-forms-create-or-connect-without-pokemon-form-names.input';
import { pokemon_formsUpsertWithoutPokemon_form_namesInput } from './pokemon-forms-upsert-without-pokemon-form-names.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { pokemon_formsUpdateWithoutPokemon_form_namesInput } from './pokemon-forms-update-without-pokemon-form-names.input';

@InputType()
export class pokemon_formsUpdateOneRequiredWithoutPokemon_form_namesNestedInput {

    @Field(() => pokemon_formsCreateWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => pokemon_formsCreateWithoutPokemon_form_namesInput)
    create?: pokemon_formsCreateWithoutPokemon_form_namesInput;

    @Field(() => pokemon_formsCreateOrConnectWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutPokemon_form_namesInput)
    connectOrCreate?: pokemon_formsCreateOrConnectWithoutPokemon_form_namesInput;

    @Field(() => pokemon_formsUpsertWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => pokemon_formsUpsertWithoutPokemon_form_namesInput)
    upsert?: pokemon_formsUpsertWithoutPokemon_form_namesInput;

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsUpdateWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => pokemon_formsUpdateWithoutPokemon_form_namesInput)
    update?: pokemon_formsUpdateWithoutPokemon_form_namesInput;
}
