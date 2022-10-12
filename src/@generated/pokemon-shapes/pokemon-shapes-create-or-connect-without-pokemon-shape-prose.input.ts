import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateWithoutPokemon_shape_proseInput } from './pokemon-shapes-create-without-pokemon-shape-prose.input';

@InputType()
export class pokemon_shapesCreateOrConnectWithoutPokemon_shape_proseInput {

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shapesWhereUniqueInput)
    where!: pokemon_shapesWhereUniqueInput;

    @Field(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput)
    create!: pokemon_shapesCreateWithoutPokemon_shape_proseInput;
}
