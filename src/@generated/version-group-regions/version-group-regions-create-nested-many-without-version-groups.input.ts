import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsCreateWithoutVersion_groupsInput } from './version-group-regions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateOrConnectWithoutVersion_groupsInput } from './version-group-regions-create-or-connect-without-version-groups.input';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';

@InputType()
export class version_group_regionsCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [version_group_regionsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsCreateWithoutVersion_groupsInput)
    create?: Array<version_group_regionsCreateWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<version_group_regionsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    connect?: Array<version_group_regionsWhereUniqueInput>;
}
