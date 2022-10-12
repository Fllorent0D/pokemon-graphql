import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { statsUpdateOneRequiredWithoutStat_namesNestedInput } from '../stats/stats-update-one-required-without-stat-names-nested.input';

@InputType()
export class stat_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => statsUpdateOneRequiredWithoutStat_namesNestedInput, {nullable:true})
    stats?: statsUpdateOneRequiredWithoutStat_namesNestedInput;
}
