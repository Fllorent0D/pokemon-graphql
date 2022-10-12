import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutItem_pocket_namesNestedInput } from '../languages/languages-update-one-required-without-item-pocket-names-nested.input';

@InputType()
export class item_pocket_namesUpdateWithoutItem_pocketsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutItem_pocket_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutItem_pocket_namesNestedInput;
}
