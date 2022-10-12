import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { movesUpdateOneRequiredWithoutMachinesNestedInput } from '../moves/moves-update-one-required-without-machines-nested.input';
import { itemsUpdateOneRequiredWithoutMachinesNestedInput } from '../items/items-update-one-required-without-machines-nested.input';
import { version_groupsUpdateOneRequiredWithoutMachinesNestedInput } from '../version-groups/version-groups-update-one-required-without-machines-nested.input';

@InputType()
export class machinesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => movesUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutMachinesNestedInput;
}
