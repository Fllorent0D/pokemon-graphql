import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutMachinesInput } from '../items/items-create-nested-one-without-machines.input';
import { version_groupsCreateNestedOneWithoutMachinesInput } from '../version-groups/version-groups-create-nested-one-without-machines.input';

@InputType()
export class machinesCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => itemsCreateNestedOneWithoutMachinesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutMachinesInput;

    @Field(() => version_groupsCreateNestedOneWithoutMachinesInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutMachinesInput;
}
