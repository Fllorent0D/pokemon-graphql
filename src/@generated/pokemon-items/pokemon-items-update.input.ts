import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { itemsUpdateOneRequiredWithoutPokemon_itemsNestedInput } from '../items/items-update-one-required-without-pokemon-items-nested.input';
import { versionsUpdateOneRequiredWithoutPokemon_itemsNestedInput } from '../versions/versions-update-one-required-without-pokemon-items-nested.input';
import { pokemonUpdateOneRequiredWithoutPokemon_itemsNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-items-nested.input';

@InputType()
export class pokemon_itemsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => itemsUpdateOneRequiredWithoutPokemon_itemsNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutPokemon_itemsNestedInput;

    @Field(() => versionsUpdateOneRequiredWithoutPokemon_itemsNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutPokemon_itemsNestedInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_itemsNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_itemsNestedInput;
}
