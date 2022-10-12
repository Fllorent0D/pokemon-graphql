import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutStat_hint_namesNestedInput } from '../languages/languages-update-one-required-without-stat-hint-names-nested.input';

@InputType()
export class stat_hint_namesUpdateWithoutStat_hintsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutStat_hint_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutStat_hint_namesNestedInput;
}
