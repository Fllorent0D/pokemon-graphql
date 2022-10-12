import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class machinesUncheckedCreateWithoutVersion_groupsInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    move_id!: number;
}
