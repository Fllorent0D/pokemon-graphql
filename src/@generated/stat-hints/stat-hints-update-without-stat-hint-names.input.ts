import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { statsUpdateOneRequiredWithoutStat_hintsNestedInput } from '../stats/stats-update-one-required-without-stat-hints-nested.input';

@InputType()
export class stat_hintsUpdateWithoutStat_hint_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gene_mod_5?: IntFieldUpdateOperationsInput;

    @Field(() => statsUpdateOneRequiredWithoutStat_hintsNestedInput, {nullable:true})
    stats?: statsUpdateOneRequiredWithoutStat_hintsNestedInput;
}
