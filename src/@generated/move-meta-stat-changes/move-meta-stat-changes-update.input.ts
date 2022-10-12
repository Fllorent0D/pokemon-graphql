import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { statsUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput } from '../stats/stats-update-one-required-without-move-meta-stat-changes-nested.input';
import { movesUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput } from '../moves/moves-update-one-required-without-move-meta-stat-changes-nested.input';

@InputType()
export class move_meta_stat_changesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    change?: IntFieldUpdateOperationsInput;

    @Field(() => statsUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput, {nullable:true})
    stats?: statsUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput;
}
