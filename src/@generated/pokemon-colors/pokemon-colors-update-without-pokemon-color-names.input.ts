import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_speciesUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-update-many-without-color-nested.input';

@InputType()
export class pokemon_colorsUpdateWithoutPokemon_color_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateManyWithoutColorNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutColorNestedInput;
}
