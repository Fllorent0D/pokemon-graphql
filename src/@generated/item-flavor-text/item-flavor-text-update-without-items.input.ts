import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../languages/languages-update-one-required-without-item-flavor-text-nested.input';
import { version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../version-groups/version-groups-update-one-required-without-item-flavor-text-nested.input';

@InputType()
export class item_flavor_textUpdateWithoutItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput;
}
