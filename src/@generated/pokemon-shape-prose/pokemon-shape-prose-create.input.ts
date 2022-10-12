import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_shape_proseInput } from '../languages/languages-create-nested-one-without-pokemon-shape-prose.input';
import { pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput } from '../pokemon-shapes/pokemon-shapes-create-nested-one-without-pokemon-shape-prose.input';

@InputType()
export class pokemon_shape_proseCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    awesome_name?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_shape_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_shape_proseInput;

    @Field(() => pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput, {nullable:false})
    pokemon_shapes!: pokemon_shapesCreateNestedOneWithoutPokemon_shape_proseInput;
}
