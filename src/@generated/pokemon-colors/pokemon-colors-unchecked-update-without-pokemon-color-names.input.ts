import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_speciesUncheckedUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-color-nested.input';

@InputType()
export class pokemon_colorsUncheckedUpdateWithoutPokemon_color_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutColorNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutColorNestedInput;
}
