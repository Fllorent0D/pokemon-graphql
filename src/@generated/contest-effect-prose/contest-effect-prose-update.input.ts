import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput } from '../languages/languages-update-one-required-without-contest-effect-prose-nested.input';
import { contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput } from '../contest-effects/contest-effects-update-one-required-without-contest-effect-prose-nested.input';

@InputType()
export class contest_effect_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutContest_effect_proseNestedInput;

    @Field(() => contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput, {nullable:true})
    contest_effects?: contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput;
}
