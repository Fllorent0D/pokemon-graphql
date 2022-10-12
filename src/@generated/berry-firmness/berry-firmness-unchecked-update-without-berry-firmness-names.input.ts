import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berriesUncheckedUpdateManyWithoutBerry_firmnessNestedInput } from '../berries/berries-unchecked-update-many-without-berry-firmness-nested.input';

@InputType()
export class berry_firmnessUncheckedUpdateWithoutBerry_firmness_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berriesUncheckedUpdateManyWithoutBerry_firmnessNestedInput, {nullable:true})
    berries?: berriesUncheckedUpdateManyWithoutBerry_firmnessNestedInput;
}
