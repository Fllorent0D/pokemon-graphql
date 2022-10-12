import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateWithoutRegionsInput } from './version-group-regions-create-without-regions.input';

@InputType()
export class version_group_regionsCreateOrConnectWithoutRegionsInput {

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;

    @Field(() => version_group_regionsCreateWithoutRegionsInput, {nullable:false})
    @Type(() => version_group_regionsCreateWithoutRegionsInput)
    create!: version_group_regionsCreateWithoutRegionsInput;
}
