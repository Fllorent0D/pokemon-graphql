import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateNestedManyWithoutPokemon_shapesInput } from '../pokemon-shape-prose/pokemon-shape-prose-create-nested-many-without-pokemon-shapes.input';
import { pokemon_speciesCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-create-nested-many-without-shape.input';

@InputType()
export class pokemon_shapesCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_shape_proseCreateNestedManyWithoutPokemon_shapesInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseCreateNestedManyWithoutPokemon_shapesInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutShapeInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutShapeInput;
}
