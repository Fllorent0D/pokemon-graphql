import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsCreateWithoutPokemon_color_namesInput } from './pokemon-colors-create-without-pokemon-color-names.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateOrConnectWithoutPokemon_color_namesInput } from './pokemon-colors-create-or-connect-without-pokemon-color-names.input';
import { pokemon_colorsUpsertWithoutPokemon_color_namesInput } from './pokemon-colors-upsert-without-pokemon-color-names.input';
import { pokemon_colorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { pokemon_colorsUpdateWithoutPokemon_color_namesInput } from './pokemon-colors-update-without-pokemon-color-names.input';

@InputType()
export class pokemon_colorsUpdateOneRequiredWithoutPokemon_color_namesNestedInput {

    @Field(() => pokemon_colorsCreateWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateWithoutPokemon_color_namesInput)
    create?: pokemon_colorsCreateWithoutPokemon_color_namesInput;

    @Field(() => pokemon_colorsCreateOrConnectWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateOrConnectWithoutPokemon_color_namesInput)
    connectOrCreate?: pokemon_colorsCreateOrConnectWithoutPokemon_color_namesInput;

    @Field(() => pokemon_colorsUpsertWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => pokemon_colorsUpsertWithoutPokemon_color_namesInput)
    upsert?: pokemon_colorsUpsertWithoutPokemon_color_namesInput;

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_colorsWhereUniqueInput)
    connect?: pokemon_colorsWhereUniqueInput;

    @Field(() => pokemon_colorsUpdateWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => pokemon_colorsUpdateWithoutPokemon_color_namesInput)
    update?: pokemon_colorsUpdateWithoutPokemon_color_namesInput;
}
