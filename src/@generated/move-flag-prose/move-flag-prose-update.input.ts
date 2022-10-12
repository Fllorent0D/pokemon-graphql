import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_flag_proseNestedInput } from '../languages/languages-update-one-required-without-move-flag-prose-nested.input';
import { move_flagsUpdateOneRequiredWithoutMove_flag_proseNestedInput } from '../move-flags/move-flags-update-one-required-without-move-flag-prose-nested.input';

@InputType()
export class move_flag_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_flag_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_flag_proseNestedInput;

    @Field(() => move_flagsUpdateOneRequiredWithoutMove_flag_proseNestedInput, {nullable:true})
    move_flags?: move_flagsUpdateOneRequiredWithoutMove_flag_proseNestedInput;
}
