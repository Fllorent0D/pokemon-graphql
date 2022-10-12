import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsScalarWhereInput } from './version-group-regions-scalar-where.input';
import { Type } from 'class-transformer';
import { version_group_regionsUncheckedUpdateManyWithoutVersion_group_regionsInput } from './version-group-regions-unchecked-update-many-without-version-group-regions.input';

@InputType()
export class version_group_regionsUpdateManyWithWhereWithoutVersion_groupsInput {

    @Field(() => version_group_regionsScalarWhereInput, {nullable:false})
    @Type(() => version_group_regionsScalarWhereInput)
    where!: version_group_regionsScalarWhereInput;

    @Field(() => version_group_regionsUncheckedUpdateManyWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => version_group_regionsUncheckedUpdateManyWithoutVersion_group_regionsInput)
    data!: version_group_regionsUncheckedUpdateManyWithoutVersion_group_regionsInput;
}
