import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_shape_proseUpdateManyWithoutPokemon_shapesNestedInput } from '../pokemon-shape-prose/pokemon-shape-prose-update-many-without-pokemon-shapes-nested.input';
import { pokemon_speciesUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-update-many-without-shape-nested.input';

@InputType()
export class pokemon_shapesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_shape_proseUpdateManyWithoutPokemon_shapesNestedInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUpdateManyWithoutPokemon_shapesNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutShapeNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutShapeNestedInput;
}
