import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { super_contest_effectsUpdateOneRequiredWithoutSuper_contest_effect_proseNestedInput } from '../super-contest-effects/super-contest-effects-update-one-required-without-super-contest-effect-prose-nested.input';

@InputType()
export class super_contest_effect_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => super_contest_effectsUpdateOneRequiredWithoutSuper_contest_effect_proseNestedInput, {nullable:true})
    super_contest_effects?: super_contest_effectsUpdateOneRequiredWithoutSuper_contest_effect_proseNestedInput;
}
