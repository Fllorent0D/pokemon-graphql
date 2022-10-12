import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class super_contest_combosUncheckedUpdateManyWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    second_move_id?: IntFieldUpdateOperationsInput;
}
