import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_shapesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput } from '../pokemon-shapes/pokemon-shapes-update-one-required-without-pokemon-shape-prose-nested.input';

@InputType()
export class pokemon_shape_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    awesome_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_shapesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput, {nullable:true})
    pokemon_shapes?: pokemon_shapesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput;
}
