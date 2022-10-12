import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutAbility_namesNestedInput } from '../languages/languages-update-one-required-without-ability-names-nested.input';

@InputType()
export class ability_namesUpdateWithoutAbilitiesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutAbility_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutAbility_namesNestedInput;
}
