import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class berry_flavorsUncheckedUpdateWithoutContest_typesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    berry_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;
}
