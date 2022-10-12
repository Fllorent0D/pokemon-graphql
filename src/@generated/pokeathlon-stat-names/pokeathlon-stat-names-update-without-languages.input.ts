import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokeathlon_statsUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput } from '../pokeathlon-stats/pokeathlon-stats-update-one-required-without-pokeathlon-stat-names-nested.input';

@InputType()
export class pokeathlon_stat_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => pokeathlon_statsUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput;
}
