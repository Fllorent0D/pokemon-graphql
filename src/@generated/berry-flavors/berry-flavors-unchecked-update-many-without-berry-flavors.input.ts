import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class berry_flavorsUncheckedUpdateManyWithoutBerry_flavorsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    contest_type_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flavor?: IntFieldUpdateOperationsInput;
}
