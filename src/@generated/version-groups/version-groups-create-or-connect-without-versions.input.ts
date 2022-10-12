import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';

@InputType()
export class version_groupsCreateOrConnectWithoutVersionsInput {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutVersionsInput)
    create!: version_groupsCreateWithoutVersionsInput;
}
