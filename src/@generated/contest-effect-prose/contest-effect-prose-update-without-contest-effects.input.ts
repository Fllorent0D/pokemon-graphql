import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput } from '../languages/languages-update-one-required-without-contest-effect-prose-nested.input';

@InputType()
export class contest_effect_proseUpdateWithoutContest_effectsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput;
}
