import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_target_type_idTotypesNestedInput } from '../types/types-update-one-required-without-type-efficacy-type-efficacy-target-type-id-totypes-nested.input';
import { typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_damage_type_idTotypesNestedInput } from '../types/types-update-one-required-without-type-efficacy-type-efficacy-damage-type-id-totypes-nested.input';

@InputType()
export class type_efficacyUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_factor?: IntFieldUpdateOperationsInput;

    @Field(() => typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_target_type_idTotypesNestedInput, {nullable:true})
    types_type_efficacy_target_type_idTotypes?: typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_target_type_idTotypesNestedInput;

    @Field(() => typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_damage_type_idTotypesNestedInput, {nullable:true})
    types_type_efficacy_damage_type_idTotypes?: typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_damage_type_idTotypesNestedInput;
}
