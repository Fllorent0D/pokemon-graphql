import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutVersion_groupsInput } from './move-changelog-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutVersion_groupsInput } from './move-changelog-create-or-connect-without-version-groups.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';

@InputType()
export class move_changelogCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [move_changelogCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutVersion_groupsInput)
    create?: Array<move_changelogCreateWithoutVersion_groupsInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;
}
