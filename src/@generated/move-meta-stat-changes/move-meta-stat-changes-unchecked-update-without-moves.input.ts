import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class move_meta_stat_changesUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    change?: IntFieldUpdateOperationsInput;
}