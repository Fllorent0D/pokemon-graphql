import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutVersionsInput } from './version-groups-create-or-connect-without-versions.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutVersionsInput {

    @Field(() => version_groupsCreateWithoutVersionsInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutVersionsInput)
    create?: version_groupsCreateWithoutVersionsInput;

    @Field(() => version_groupsCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutVersionsInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}
