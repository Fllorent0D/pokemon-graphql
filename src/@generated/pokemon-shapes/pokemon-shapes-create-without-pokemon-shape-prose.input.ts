import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-create-nested-many-without-shape.input';

@InputType()
export class pokemon_shapesCreateWithoutPokemon_shape_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesCreateNestedManyWithoutShapeInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutShapeInput;
}
