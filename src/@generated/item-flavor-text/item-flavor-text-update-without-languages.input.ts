import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../version-groups/version-groups-update-one-required-without-item-flavor-text-nested.input';
import { itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../items/items-update-one-required-without-item-flavor-text-nested.input';

@InputType()
export class item_flavor_textUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutItem_flavor_textNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput;
}
