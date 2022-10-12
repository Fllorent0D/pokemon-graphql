import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsCreateWithoutPokemon_speciesInput } from './pokemon-colors-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-colors-create-or-connect-without-pokemon-species.input';
import { pokemon_colorsWhereUniqueInput } from './pokemon-colors-where-unique.input';

@InputType()
export class pokemon_colorsCreateNestedOneWithoutPokemon_speciesInput {

    @Field(() => pokemon_colorsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateWithoutPokemon_speciesInput)
    create?: pokemon_colorsCreateWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: pokemon_colorsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_colorsWhereUniqueInput)
    connect?: pokemon_colorsWhereUniqueInput;
}
