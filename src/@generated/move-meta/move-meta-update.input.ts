import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { move_meta_ailmentsUpdateOneRequiredWithoutMove_metaNestedInput } from '../move-meta-ailments/move-meta-ailments-update-one-required-without-move-meta-nested.input';
import { move_meta_categoriesUpdateOneRequiredWithoutMove_metaNestedInput } from '../move-meta-categories/move-meta-categories-update-one-required-without-move-meta-nested.input';
import { movesUpdateOneRequiredWithoutMove_metaNestedInput } from '../moves/moves-update-one-required-without-move-meta-nested.input';

@InputType()
export class move_metaUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    min_hits?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    max_hits?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    min_turns?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    max_turns?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    recoil?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    healing?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    crit_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ailment_chance?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flinch_chance?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stat_chance?: IntFieldUpdateOperationsInput;

    @Field(() => move_meta_ailmentsUpdateOneRequiredWithoutMove_metaNestedInput, {nullable:true})
    move_meta_ailments?: move_meta_ailmentsUpdateOneRequiredWithoutMove_metaNestedInput;

    @Field(() => move_meta_categoriesUpdateOneRequiredWithoutMove_metaNestedInput, {nullable:true})
    move_meta_categories?: move_meta_categoriesUpdateOneRequiredWithoutMove_metaNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_metaNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_metaNestedInput;
}
