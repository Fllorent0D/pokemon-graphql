import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMachinesInput } from './version-groups-create-or-connect-without-machines.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutMachinesInput {

    @Field(() => version_groupsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMachinesInput)
    create?: version_groupsCreateWithoutMachinesInput;

    @Field(() => version_groupsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMachinesInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}
