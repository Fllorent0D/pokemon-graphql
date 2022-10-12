import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { stat_hint_namesUpdateManyWithoutStat_hintsNestedInput } from '../stat-hint-names/stat-hint-names-update-many-without-stat-hints-nested.input';

@InputType()
export class stat_hintsUpdateWithoutStatsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gene_mod_5?: IntFieldUpdateOperationsInput;

    @Field(() => stat_hint_namesUpdateManyWithoutStat_hintsNestedInput, {nullable:true})
    stat_hint_names?: stat_hint_namesUpdateManyWithoutStat_hintsNestedInput;
}
