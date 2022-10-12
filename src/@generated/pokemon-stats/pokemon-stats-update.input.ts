import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { statsUpdateOneRequiredWithoutPokemon_statsNestedInput } from '../stats/stats-update-one-required-without-pokemon-stats-nested.input';
import { pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class pokemon_statsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;

    @Field(() => statsUpdateOneRequiredWithoutPokemon_statsNestedInput, {nullable:true})
    stats?: statsUpdateOneRequiredWithoutPokemon_statsNestedInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput;
}
