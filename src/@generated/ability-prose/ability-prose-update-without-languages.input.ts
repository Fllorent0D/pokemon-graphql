import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput } from '../abilities/abilities-update-one-required-without-ability-prose-nested.input';

@InputType()
export class ability_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput;
}
