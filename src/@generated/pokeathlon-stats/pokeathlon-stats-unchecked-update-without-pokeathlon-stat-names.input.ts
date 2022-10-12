import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-unchecked-update-many-without-pokeathlon-stats-nested.input';
import { pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-unchecked-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUncheckedUpdateWithoutPokeathlon_stat_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput;
}
