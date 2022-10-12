import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesCreateWithoutVersion_groupsInput } from './machines-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { machinesCreateOrConnectWithoutVersion_groupsInput } from './machines-create-or-connect-without-version-groups.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class machinesCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [machinesCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesCreateWithoutVersion_groupsInput)
    create?: Array<machinesCreateWithoutVersion_groupsInput>;

    @Field(() => [machinesCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<machinesCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    connect?: Array<machinesWhereUniqueInput>;
}
