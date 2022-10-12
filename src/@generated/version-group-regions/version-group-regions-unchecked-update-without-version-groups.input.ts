import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class version_group_regionsUncheckedUpdateWithoutVersion_groupsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    region_id?: IntFieldUpdateOperationsInput;
}
