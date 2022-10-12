import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class contest_combosUncheckedUpdateWithoutMoves_contest_combos_second_move_idTomovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    first_move_id?: IntFieldUpdateOperationsInput;
}
