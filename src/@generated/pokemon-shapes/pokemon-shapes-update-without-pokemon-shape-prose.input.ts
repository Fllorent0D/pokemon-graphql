import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_speciesUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-update-many-without-shape-nested.input';

@InputType()
export class pokemon_shapesUpdateWithoutPokemon_shape_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateManyWithoutShapeNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutShapeNestedInput;
}
