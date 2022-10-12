import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesCreateWithoutPokemon_shape_proseInput } from './pokemon-shapes-create-without-pokemon-shape-prose.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateOrConnectWithoutPokemon_shape_proseInput } from './pokemon-shapes-create-or-connect-without-pokemon-shape-prose.input';
import { pokemon_shapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';

@InputType()
export class pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput {

    @Field(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput)
    create?: pokemon_shapesCreateWithoutPokemon_shape_proseInput;

    @Field(() => pokemon_shapesCreateOrConnectWithoutPokemon_shape_proseInput, {nullable:true})
    @Type(() => pokemon_shapesCreateOrConnectWithoutPokemon_shape_proseInput)
    connectOrCreate?: pokemon_shapesCreateOrConnectWithoutPokemon_shape_proseInput;

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_shapesWhereUniqueInput)
    connect?: pokemon_shapesWhereUniqueInput;
}
