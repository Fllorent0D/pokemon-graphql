import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput } from '../abilities/abilities-update-one-required-without-ability-names-nested.input';

@InputType()
export class ability_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_namesNestedInput;
}
