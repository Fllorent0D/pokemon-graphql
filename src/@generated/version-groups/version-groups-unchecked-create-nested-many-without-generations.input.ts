import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutGenerationsInput } from './version-groups-create-without-generations.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutGenerationsInput } from './version-groups-create-or-connect-without-generations.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsUncheckedCreateNestedManyWithoutGenerationsInput {

    @Field(() => [version_groupsCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsCreateWithoutGenerationsInput)
    create?: Array<version_groupsCreateWithoutGenerationsInput>;

    @Field(() => [version_groupsCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<version_groupsCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: Array<version_groupsWhereUniqueInput>;
}
