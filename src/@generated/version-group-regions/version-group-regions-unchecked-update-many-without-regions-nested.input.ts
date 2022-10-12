import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsCreateWithoutRegionsInput } from './version-group-regions-create-without-regions.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateOrConnectWithoutRegionsInput } from './version-group-regions-create-or-connect-without-regions.input';
import { version_group_regionsUpsertWithWhereUniqueWithoutRegionsInput } from './version-group-regions-upsert-with-where-unique-without-regions.input';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { version_group_regionsUpdateWithWhereUniqueWithoutRegionsInput } from './version-group-regions-update-with-where-unique-without-regions.input';
import { version_group_regionsUpdateManyWithWhereWithoutRegionsInput } from './version-group-regions-update-many-with-where-without-regions.input';
import { version_group_regionsScalarWhereInput } from './version-group-regions-scalar-where.input';

@InputType()
export class version_group_regionsUncheckedUpdateManyWithoutRegionsNestedInput {

    @Field(() => [version_group_regionsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsCreateWithoutRegionsInput)
    create?: Array<version_group_regionsCreateWithoutRegionsInput>;

    @Field(() => [version_group_regionsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<version_group_regionsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [version_group_regionsUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<version_group_regionsUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    set?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    disconnect?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    delete?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    connect?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<version_group_regionsUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [version_group_regionsUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<version_group_regionsUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [version_group_regionsScalarWhereInput], {nullable:true})
    @Type(() => version_group_regionsScalarWhereInput)
    deleteMany?: Array<version_group_regionsScalarWhereInput>;
}
