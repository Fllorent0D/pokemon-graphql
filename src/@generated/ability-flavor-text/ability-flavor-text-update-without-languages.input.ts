import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { version_groupsUpdateOneRequiredWithoutAbility_flavor_textNestedInput } from '../version-groups/version-groups-update-one-required-without-ability-flavor-text-nested.input';
import { abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput } from '../abilities/abilities-update-one-required-without-ability-flavor-text-nested.input';

@InputType()
export class ability_flavor_textUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutAbility_flavor_textNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutAbility_flavor_textNestedInput;

    @Field(() => abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput, {nullable:true})
    abilities?: abilitiesUpdateOneRequiredWithoutAbility_flavor_textNestedInput;
}
