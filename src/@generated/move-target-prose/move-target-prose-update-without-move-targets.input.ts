import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_target_proseNestedInput } from '../languages/languages-update-one-required-without-move-target-prose-nested.input';

@InputType()
export class move_target_proseUpdateWithoutMove_targetsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_target_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_target_proseNestedInput;
}
