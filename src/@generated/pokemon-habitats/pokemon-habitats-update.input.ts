import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput } from '../pokemon-habitat-names/pokemon-habitat-names-update-many-without-pokemon-habitats-nested.input';
import { pokemon_speciesUpdateManyWithoutPokemon_habitatsNestedInput } from '../pokemon-species/pokemon-species-update-many-without-pokemon-habitats-nested.input';

@InputType()
export class pokemon_habitatsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUpdateManyWithoutPokemon_habitatsNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutPokemon_habitatsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutPokemon_habitatsNestedInput;
}
