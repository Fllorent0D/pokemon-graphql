import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesCreateWithoutVersion_groupsInput } from './machines-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { machinesCreateOrConnectWithoutVersion_groupsInput } from './machines-create-or-connect-without-version-groups.input';
import { machinesUpsertWithWhereUniqueWithoutVersion_groupsInput } from './machines-upsert-with-where-unique-without-version-groups.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { machinesUpdateWithWhereUniqueWithoutVersion_groupsInput } from './machines-update-with-where-unique-without-version-groups.input';
import { machinesUpdateManyWithWhereWithoutVersion_groupsInput } from './machines-update-many-with-where-without-version-groups.input';
import { machinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class machinesUncheckedUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [machinesCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesCreateWithoutVersion_groupsInput)
    create?: Array<machinesCreateWithoutVersion_groupsInput>;

    @Field(() => [machinesCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<machinesCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [machinesUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<machinesUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    set?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    disconnect?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    delete?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    connect?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<machinesUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [machinesUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => machinesUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<machinesUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    @Type(() => machinesScalarWhereInput)
    deleteMany?: Array<machinesScalarWhereInput>;
}
