import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berriesUpdateManyWithoutBerry_firmnessNestedInput } from '../berries/berries-update-many-without-berry-firmness-nested.input';

@InputType()
export class berry_firmnessUpdateWithoutBerry_firmness_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berriesUpdateManyWithoutBerry_firmnessNestedInput, {nullable:true})
    berries?: berriesUpdateManyWithoutBerry_firmnessNestedInput;
}
