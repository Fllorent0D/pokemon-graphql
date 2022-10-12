import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput } from '../languages/languages-update-one-required-without-move-flavor-summaries-nested.input';

@InputType()
export class move_flavor_summariesUpdateWithoutMovesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput;
}
