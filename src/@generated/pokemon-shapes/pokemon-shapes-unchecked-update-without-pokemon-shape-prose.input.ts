import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_speciesUncheckedUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-shape-nested.input';

@InputType()
export class pokemon_shapesUncheckedUpdateWithoutPokemon_shape_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutShapeNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutShapeNestedInput;
}
