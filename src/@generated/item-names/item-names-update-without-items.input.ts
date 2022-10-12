import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_namesNestedInput } from '../languages/languages-update-one-required-without-item-names-nested.input';

@InputType()
export class item_namesUpdateWithoutItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_namesNestedInput;
}
