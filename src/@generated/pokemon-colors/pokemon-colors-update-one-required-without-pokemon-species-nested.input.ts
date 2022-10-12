import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsCreateWithoutPokemon_speciesInput } from './pokemon-colors-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-colors-create-or-connect-without-pokemon-species.input';
import { pokemon_colorsUpsertWithoutPokemon_speciesInput } from './pokemon-colors-upsert-without-pokemon-species.input';
import { pokemon_colorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { pokemon_colorsUpdateWithoutPokemon_speciesInput } from './pokemon-colors-update-without-pokemon-species.input';

@InputType()
export class pokemon_colorsUpdateOneRequiredWithoutPokemon_speciesNestedInput {

    @Field(() => pokemon_colorsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateWithoutPokemon_speciesInput)
    create?: pokemon_colorsCreateWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsUpsertWithoutPokemon_speciesInput)
    upsert?: pokemon_colorsUpsertWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_colorsWhereUniqueInput)
    connect?: pokemon_colorsWhereUniqueInput;

    @Field(() => pokemon_colorsUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsUpdateWithoutPokemon_speciesInput)
    update?: pokemon_colorsUpdateWithoutPokemon_speciesInput;
}
