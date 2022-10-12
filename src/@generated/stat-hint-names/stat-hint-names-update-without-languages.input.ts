import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { stat_hintsUpdateOneRequiredWithoutStat_hint_namesNestedInput } from '../stat-hints/stat-hints-update-one-required-without-stat-hint-names-nested.input';

@InputType()
export class stat_hint_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => stat_hintsUpdateOneRequiredWithoutStat_hint_namesNestedInput, {nullable:true})
    stat_hints?: stat_hintsUpdateOneRequiredWithoutStat_hint_namesNestedInput;
}
