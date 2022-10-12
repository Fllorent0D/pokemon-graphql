import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { encountersUncheckedUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_abilitiesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_formsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_game_indicesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_itemsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_statsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-unchecked-update-many-without-pokemon-nested.input';
import { pokemon_typesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-types/pokemon-types-unchecked-update-many-without-pokemon-nested.input';

@InputType()
export class pokemonUncheckedUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => encountersUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: encountersUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_abilitiesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_formsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_forms?: pokemon_formsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_game_indicesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_itemsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_statsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_stats?: pokemon_statsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => pokemon_typesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    pokemon_types?: pokemon_typesUncheckedUpdateManyWithoutPokemonNestedInput;
}
