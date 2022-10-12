import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { typesUpdateOneWithoutBerriesNestedInput } from '../types/types-update-one-without-berries-nested.input';
import { berry_firmnessUpdateOneRequiredWithoutBerriesNestedInput } from '../berry-firmness/berry-firmness-update-one-required-without-berries-nested.input';
import { itemsUpdateOneRequiredWithoutBerriesNestedInput } from '../items/items-update-one-required-without-berries-nested.input';

@InputType()
export class berriesUpdateWithoutBerry_flavorsInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    natural_gift_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    size?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_harvest?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    growth_time?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    soil_dryness?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    smoothness?: IntFieldUpdateOperationsInput;

    @Field(() => typesUpdateOneWithoutBerriesNestedInput, {nullable:true})
    types?: typesUpdateOneWithoutBerriesNestedInput;

    @Field(() => berry_firmnessUpdateOneRequiredWithoutBerriesNestedInput, {nullable:true})
    berry_firmness?: berry_firmnessUpdateOneRequiredWithoutBerriesNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutBerriesNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutBerriesNestedInput;
}
