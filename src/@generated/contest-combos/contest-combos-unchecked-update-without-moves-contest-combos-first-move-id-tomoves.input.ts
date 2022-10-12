import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class contest_combosUncheckedUpdateWithoutMoves_contest_combos_first_move_idTomovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    second_move_id?: IntFieldUpdateOperationsInput;
}
