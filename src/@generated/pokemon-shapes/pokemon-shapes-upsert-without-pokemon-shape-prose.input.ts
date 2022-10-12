import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesUpdateWithoutPokemon_shape_proseInput } from './pokemon-shapes-update-without-pokemon-shape-prose.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateWithoutPokemon_shape_proseInput } from './pokemon-shapes-create-without-pokemon-shape-prose.input';

@InputType()
export class pokemon_shapesUpsertWithoutPokemon_shape_proseInput {

    @Field(() => pokemon_shapesUpdateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => pokemon_shapesUpdateWithoutPokemon_shape_proseInput)
    update!: pokemon_shapesUpdateWithoutPokemon_shape_proseInput;

    @Field(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => pokemon_shapesCreateWithoutPokemon_shape_proseInput)
    create!: pokemon_shapesCreateWithoutPokemon_shape_proseInput;
}
