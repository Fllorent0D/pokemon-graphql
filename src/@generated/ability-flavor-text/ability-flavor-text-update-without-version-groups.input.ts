import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutAbility_flavor_textNestedInput } from '../languages/languages-update-one-required-without-ability-flavor-text-nested.input';
import { abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput } from '../abilities/abilities-update-one-required-without-ability-flavor-text-nested.input';

@InputType()
export class ability_flavor_textUpdateWithoutVersion_groupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutAbility_flavor_textNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutAbility_flavor_textNestedInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput;
}
