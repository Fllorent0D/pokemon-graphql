import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { contest_typesUpdateOneRequiredWithoutBerry_flavorsNestedInput } from '../contest-types/contest-types-update-one-required-without-berry-flavors-nested.input';
import { berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput } from '../berries/berries-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class berry_flavorsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;

    @Field(() => contest_typesUpdateOneRequiredWithoutBerry_flavorsNestedInput, {nullable:true})
    contest_types?: contest_typesUpdateOneRequiredWithoutBerry_flavorsNestedInput;

    @Field(() => berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput, {nullable:true})
    berries?: berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput;
}
