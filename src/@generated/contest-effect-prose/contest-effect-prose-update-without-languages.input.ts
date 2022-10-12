import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput } from '../contest-effects/contest-effects-update-one-required-without-contest-effect-prose-nested.input';

@InputType()
export class contest_effect_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput, {nullable:true})
    contest_effects?: contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput;
}
