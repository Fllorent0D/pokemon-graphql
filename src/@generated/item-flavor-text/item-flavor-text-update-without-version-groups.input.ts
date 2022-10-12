import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../languages/languages-update-one-required-without-item-flavor-text-nested.input';
import { itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput } from '../items/items-update-one-required-without-item-flavor-text-nested.input';

@InputType()
export class item_flavor_textUpdateWithoutVersion_groupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput;
}
