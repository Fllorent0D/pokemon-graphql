import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_target_proseNestedInput } from '../languages/languages-update-one-required-without-move-target-prose-nested.input';
import { move_targetsUpdateOneRequiredWithoutMove_target_proseNestedInput } from '../move-targets/move-targets-update-one-required-without-move-target-prose-nested.input';

@InputType()
export class move_target_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_target_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_target_proseNestedInput;

    @Field(() => move_targetsUpdateOneRequiredWithoutMove_target_proseNestedInput, {nullable:true})
    move_targets?: move_targetsUpdateOneRequiredWithoutMove_target_proseNestedInput;
}
