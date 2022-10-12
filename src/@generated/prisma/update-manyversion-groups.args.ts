import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsUncheckedUpdateManyInput } from '../version-groups/version-groups-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';

@ArgsType()
export class UpdateManyversionGroupsArgs {

    @Field(() => version_groupsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => version_groupsUncheckedUpdateManyInput)
    data!: version_groupsUncheckedUpdateManyInput;

    @Field(() => version_groupsWhereInput, {nullable:true})
    @Type(() => version_groupsWhereInput)
    where?: version_groupsWhereInput;
}
