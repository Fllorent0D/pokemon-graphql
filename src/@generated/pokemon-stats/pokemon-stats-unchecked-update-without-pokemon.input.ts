import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class pokemon_statsUncheckedUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;
}
