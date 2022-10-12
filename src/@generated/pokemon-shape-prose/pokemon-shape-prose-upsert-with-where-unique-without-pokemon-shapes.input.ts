import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseUpdateWithoutPokemon_shapesInput } from './pokemon-shape-prose-update-without-pokemon-shapes.input';
import { pokemon_shape_proseCreateWithoutPokemon_shapesInput } from './pokemon-shape-prose-create-without-pokemon-shapes.input';

@InputType()
export class pokemon_shape_proseUpsertWithWhereUniqueWithoutPokemon_shapesInput {

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;

    @Field(() => pokemon_shape_proseUpdateWithoutPokemon_shapesInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateWithoutPokemon_shapesInput)
    update!: pokemon_shape_proseUpdateWithoutPokemon_shapesInput;

    @Field(() => pokemon_shape_proseCreateWithoutPokemon_shapesInput, {nullable:false})
    @Type(() => pokemon_shape_proseCreateWithoutPokemon_shapesInput)
    create!: pokemon_shape_proseCreateWithoutPokemon_shapesInput;
}
