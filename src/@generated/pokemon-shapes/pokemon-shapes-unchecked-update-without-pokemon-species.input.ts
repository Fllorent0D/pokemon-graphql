import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_shape_proseUncheckedUpdateManyWithoutPokemon_shapesNestedInput } from '../pokemon-shape-prose/pokemon-shape-prose-unchecked-update-many-without-pokemon-shapes-nested.input';

@InputType()
export class pokemon_shapesUncheckedUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_shape_proseUncheckedUpdateManyWithoutPokemon_shapesNestedInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUncheckedUpdateManyWithoutPokemon_shapesNestedInput;
}
