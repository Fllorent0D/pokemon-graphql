import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class nature_pokeathlon_statsUncheckedUpdateManyWithoutNature_pokeathlon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokeathlon_stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_change?: IntFieldUpdateOperationsInput;
}
