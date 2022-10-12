import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsScalarWhereInput } from './version-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { version_groupsUncheckedUpdateManyWithoutVersion_groupsInput } from './version-groups-unchecked-update-many-without-version-groups.input';

@InputType()
export class version_groupsUpdateManyWithWhereWithoutPokedexesInput {

    @Field(() => version_groupsScalarWhereInput, {nullable:false})
    @Type(() => version_groupsScalarWhereInput)
    where!: version_groupsScalarWhereInput;

    @Field(() => version_groupsUncheckedUpdateManyWithoutVersion_groupsInput, {nullable:false})
    @Type(() => version_groupsUncheckedUpdateManyWithoutVersion_groupsInput)
    data!: version_groupsUncheckedUpdateManyWithoutVersion_groupsInput;
}
