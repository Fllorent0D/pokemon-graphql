import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutStat_namesNestedInput } from '../languages/languages-update-one-required-without-stat-names-nested.input';

@InputType()
export class stat_namesUpdateWithoutStatsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutStat_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutStat_namesNestedInput;
}
