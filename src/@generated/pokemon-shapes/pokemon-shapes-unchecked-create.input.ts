import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_shape_proseUncheckedCreateNestedManyWithoutPokemon_shapesInput } from '../pokemon-shape-prose/pokemon-shape-prose-unchecked-create-nested-many-without-pokemon-shapes.input';
import { pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-shape.input';

@InputType()
export class pokemon_shapesUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_shape_proseUncheckedCreateNestedManyWithoutPokemon_shapesInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUncheckedCreateNestedManyWithoutPokemon_shapesInput;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput;
}
