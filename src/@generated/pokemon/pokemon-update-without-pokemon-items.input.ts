import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { pokemon_speciesUpdateOneWithoutPokemonNestedInput } from '../pokemon-species/pokemon-species-update-one-without-pokemon-nested.input';
import { encountersUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-update-many-without-pokemon-nested.input';
import { pokemon_abilitiesUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-pokemon-nested.input';
import { pokemon_formsUpdateManyWithoutPokemonNestedInput } from '../pokemon-forms/pokemon-forms-update-many-without-pokemon-nested.input';
import { pokemon_game_indicesUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-pokemon-nested.input';
import { pokemon_statsUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-pokemon-nested.input';
import { pokemon_typesUpdateManyWithoutPokemonNestedInput } from '../pokemon-types/pokemon-types-update-many-without-pokemon-nested.input';

@InputType()
export class pokemonUpdateWithoutPokemon_itemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    weight?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_experience?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_default?: BoolFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneWithoutPokemonNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneWithoutPokemonNestedInput;

    @Field(() => encountersUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_abilitiesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_formsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_forms?: pokemon_formsUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_game_indicesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_statsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_stats?: pokemon_statsUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_typesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_types?: pokemon_typesUpdateManyWithoutPokemonNestedInput;
}
