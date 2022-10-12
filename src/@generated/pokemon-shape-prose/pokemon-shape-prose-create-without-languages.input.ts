import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput } from '../pokemon-shapes/pokemon-shapes-create-nested-one-without-pokemon-shape-prose.input';

@InputType()
export class pokemon_shape_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    awesome_name?: string;

    @Field(() => pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput, {nullable:false})
    pokemon_shapes!: pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput;
}
