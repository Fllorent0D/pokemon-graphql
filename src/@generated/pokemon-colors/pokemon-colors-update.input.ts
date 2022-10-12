import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput } from '../pokemon-color-names/pokemon-color-names-update-many-without-pokemon-colors-nested.input';
import { pokemon_speciesUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-update-many-without-color-nested.input';

@InputType()
export class pokemon_colorsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutColorNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutColorNestedInput;
}
