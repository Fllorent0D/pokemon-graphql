import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { movesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput } from '../moves/moves-update-one-required-without-move-flavor-summaries-nested.input';

@InputType()
export class move_flavor_summariesUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput;
}
