import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesCreateWithoutPokemon_colorsInput } from './pokemon-color-names-create-without-pokemon-colors.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput } from './pokemon-color-names-create-or-connect-without-pokemon-colors.input';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';

@InputType()
export class pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput {

    @Field(() => [pokemon_color_namesCreateWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateWithoutPokemon_colorsInput)
    create?: Array<pokemon_color_namesCreateWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput)
    connectOrCreate?: Array<pokemon_color_namesCreateOrConnectWithoutPokemon_colorsInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    connect?: Array<pokemon_color_namesWhereUniqueInput>;
}
