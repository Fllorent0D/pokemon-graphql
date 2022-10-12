import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class type_efficacyUncheckedUpdateWithoutTypes_type_efficacy_damage_type_idTotypesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    target_type_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_factor?: IntFieldUpdateOperationsInput;
}
