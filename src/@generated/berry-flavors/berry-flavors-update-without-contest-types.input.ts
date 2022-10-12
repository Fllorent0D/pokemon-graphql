import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput } from '../berries/berries-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class berry_flavorsUpdateWithoutContest_typesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;

    @Field(() => berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput, {nullable:true})
    berries?: berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput;
}
