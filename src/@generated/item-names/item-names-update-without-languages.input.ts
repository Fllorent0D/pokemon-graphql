import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { itemsUpdateOneRequiredWithoutItem_namesNestedInput } from '../items/items-update-one-required-without-item-names-nested.input';

@InputType()
export class item_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_namesNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_namesNestedInput;
}
