import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMachinesInput } from '../moves/moves-create-nested-one-without-machines.input';
import { itemsCreateNestedOneWithoutMachinesInput } from '../items/items-create-nested-one-without-machines.input';

@InputType()
export class machinesCreateWithoutVersion_groupsInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => movesCreateNestedOneWithoutMachinesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMachinesInput;

    @Field(() => itemsCreateNestedOneWithoutMachinesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutMachinesInput;
}
