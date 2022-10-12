import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput } from '../pokemon/pokemon-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class pokemon_statsUpdateWithoutStatsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;

    @Field(() => pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput, {nullable:true})
    pokemon?: pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput;
}
