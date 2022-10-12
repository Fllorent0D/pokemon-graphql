import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesMachine_numberVersion_group_idCompoundUniqueInput } from './machines-machine-number-version-group-id-compound-unique.input';

@InputType()
export class machinesWhereUniqueInput {

    @Field(() => machinesMachine_numberVersion_group_idCompoundUniqueInput, {nullable:true})
    machine_number_version_group_id?: machinesMachine_numberVersion_group_idCompoundUniqueInput;
}
