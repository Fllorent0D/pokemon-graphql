import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsCreateWithoutRegionsInput } from './version-group-regions-create-without-regions.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateOrConnectWithoutRegionsInput } from './version-group-regions-create-or-connect-without-regions.input';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';

@InputType()
export class version_group_regionsCreateNestedManyWithoutRegionsInput {

    @Field(() => [version_group_regionsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsCreateWithoutRegionsInput)
    create?: Array<version_group_regionsCreateWithoutRegionsInput>;

    @Field(() => [version_group_regionsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => version_group_regionsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<version_group_regionsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    connect?: Array<version_group_regionsWhereUniqueInput>;
}
