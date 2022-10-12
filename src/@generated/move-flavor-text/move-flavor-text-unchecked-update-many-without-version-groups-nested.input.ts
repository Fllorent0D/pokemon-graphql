import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textCreateWithoutVersion_groupsInput } from './move-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './move-flavor-text-create-or-connect-without-version-groups.input';
import { move_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput } from './move-flavor-text-upsert-with-where-unique-without-version-groups.input';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { move_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput } from './move-flavor-text-update-with-where-unique-without-version-groups.input';
import { move_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput } from './move-flavor-text-update-many-with-where-without-version-groups.input';
import { move_flavor_textScalarWhereInput } from './move-flavor-text-scalar-where.input';

@InputType()
export class move_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [move_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<move_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<move_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    set?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    disconnect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    delete?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    connect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<move_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<move_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => move_flavor_textScalarWhereInput)
    deleteMany?: Array<move_flavor_textScalarWhereInput>;
}
