import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { version_group_regionsUpdateWithoutRegionsInput } from './version-group-regions-update-without-regions.input';

@InputType()
export class version_group_regionsUpdateWithWhereUniqueWithoutRegionsInput {

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;

    @Field(() => version_group_regionsUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => version_group_regionsUpdateWithoutRegionsInput)
    data!: version_group_regionsUpdateWithoutRegionsInput;
}
