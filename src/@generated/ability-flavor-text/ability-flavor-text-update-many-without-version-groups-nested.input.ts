import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutVersion_groupsInput } from './ability-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './ability-flavor-text-create-or-connect-without-version-groups.input';
import { ability_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput } from './ability-flavor-text-upsert-with-where-unique-without-version-groups.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { ability_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput } from './ability-flavor-text-update-with-where-unique-without-version-groups.input';
import { ability_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput } from './ability-flavor-text-update-many-with-where-without-version-groups.input';
import { ability_flavor_textScalarWhereInput } from './ability-flavor-text-scalar-where.input';

@InputType()
export class ability_flavor_textUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [ability_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<ability_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<ability_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    set?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    disconnect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    delete?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<ability_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<ability_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [ability_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => ability_flavor_textScalarWhereInput)
    deleteMany?: Array<ability_flavor_textScalarWhereInput>;
}
