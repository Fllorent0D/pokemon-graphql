import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutVersion_groupsInput } from './encounter-slots-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutVersion_groupsInput } from './encounter-slots-create-or-connect-without-version-groups.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@InputType()
export class encounter_slotsCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [encounter_slotsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsCreateWithoutVersion_groupsInput)
    create?: Array<encounter_slotsCreateWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<encounter_slotsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: Array<encounter_slotsWhereUniqueInput>;
}
