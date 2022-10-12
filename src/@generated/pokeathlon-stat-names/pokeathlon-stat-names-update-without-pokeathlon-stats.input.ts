import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput } from '../languages/languages-update-one-required-without-pokeathlon-stat-names-nested.input';

@InputType()
export class pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput;
}
