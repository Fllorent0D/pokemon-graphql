import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { stat_hint_namesUncheckedUpdateManyWithoutStat_hintsNestedInput } from '../stat-hint-names/stat-hint-names-unchecked-update-many-without-stat-hints-nested.input';

@InputType()
export class stat_hintsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gene_mod_5?: IntFieldUpdateOperationsInput;

    @Field(() => stat_hint_namesUncheckedUpdateManyWithoutStat_hintsNestedInput, {nullable:true})
    stat_hint_names?: stat_hint_namesUncheckedUpdateManyWithoutStat_hintsNestedInput;
}
