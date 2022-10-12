import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';

@InputType()
export class version_groupsCreateOrConnectWithoutMachinesInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMachinesInput)
    create!: version_groupsCreateWithoutMachinesInput;
}
