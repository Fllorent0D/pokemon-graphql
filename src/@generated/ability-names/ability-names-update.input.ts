import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutAbility_namesNestedInput } from '../languages/languages-update-one-required-without-ability-names-nested.input';
import { abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput } from '../abilities/abilities-update-one-required-without-ability-names-nested.input';

@InputType()
export class ability_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutAbility_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutAbility_namesNestedInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput;
}
