import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutVersion_groupsInput } from './encounter-slots-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutVersion_groupsInput } from './encounter-slots-create-or-connect-without-version-groups.input';
import { encounter_slotsUpsertWithWhereUniqueWithoutVersion_groupsInput } from './encounter-slots-upsert-with-where-unique-without-version-groups.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { encounter_slotsUpdateWithWhereUniqueWithoutVersion_groupsInput } from './encounter-slots-update-with-where-unique-without-version-groups.input';
import { encounter_slotsUpdateManyWithWhereWithoutVersion_groupsInput } from './encounter-slots-update-many-with-where-without-version-groups.input';
import { encounter_slotsScalarWhereInput } from './encounter-slots-scalar-where.input';

@InputType()
export class encounter_slotsUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [encounter_slotsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsCreateWithoutVersion_groupsInput)
    create?: Array<encounter_slotsCreateWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<encounter_slotsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<encounter_slotsUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    set?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    disconnect?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    delete?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<encounter_slotsUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<encounter_slotsUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsScalarWhereInput], {nullable:true})
    @Type(() => encounter_slotsScalarWhereInput)
    deleteMany?: Array<encounter_slotsScalarWhereInput>;
}
