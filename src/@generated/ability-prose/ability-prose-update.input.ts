import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutAbility_proseNestedInput } from '../languages/languages-update-one-required-without-ability-prose-nested.input';
import { abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput } from '../abilities/abilities-update-one-required-without-ability-prose-nested.input';

@InputType()
export class ability_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    short_effect?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutAbility_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutAbility_proseNestedInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_proseNestedInput;
}
