import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesCreateWithoutVersion_groupsInput } from './machines-create-without-version-groups.input';

@InputType()
export class machinesCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => machinesCreateWithoutVersion_groupsInput)
    create!: machinesCreateWithoutVersion_groupsInput;
}
