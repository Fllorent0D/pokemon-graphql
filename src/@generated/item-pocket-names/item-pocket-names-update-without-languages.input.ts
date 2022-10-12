import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_pocketsUpdateOneRequiredWithoutItem_pocket_namesNestedInput } from '../item-pockets/item-pockets-update-one-required-without-item-pocket-names-nested.input';

@InputType()
export class item_pocket_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => item_pocketsUpdateOneRequiredWithoutItem_pocket_namesNestedInput, {nullable:true})
    item_pockets?: item_pocketsUpdateOneRequiredWithoutItem_pocket_namesNestedInput;
}
