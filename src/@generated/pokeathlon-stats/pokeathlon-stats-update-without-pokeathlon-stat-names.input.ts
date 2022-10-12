import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update-many-without-pokeathlon-stats-nested.input';
import { pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-update-many-without-pokeathlon-stats-nested.input';

@InputType()
export class pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput;

    @Field(() => pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsUpdateManyWithoutPokeathlon_statsNestedInput;
}
