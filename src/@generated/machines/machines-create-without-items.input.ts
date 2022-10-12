import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMachinesInput } from '../moves/moves-create-nested-one-without-machines.input';
import { version_groupsCreateNestedOneWithoutMachinesInput } from '../version-groups/version-groups-create-nested-one-without-machines.input';

@InputType()
export class machinesCreateWithoutItemsInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => movesCreateNestedOneWithoutMachinesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMachinesInput;

    @Field(() => version_groupsCreateNestedOneWithoutMachinesInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutMachinesInput;
}
