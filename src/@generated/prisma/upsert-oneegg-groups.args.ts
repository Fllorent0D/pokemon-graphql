import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsWhereUniqueInput } from '../egg-groups/egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateInput } from '../egg-groups/egg-groups-create.input';
import { egg_groupsUpdateInput } from '../egg-groups/egg-groups-update.input';

@ArgsType()
export class UpsertOneeggGroupsArgs {

    @Field(() => egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => egg_groupsWhereUniqueInput)
    where!: egg_groupsWhereUniqueInput;

    @Field(() => egg_groupsCreateInput, {nullable:false})
    @Type(() => egg_groupsCreateInput)
    create!: egg_groupsCreateInput;

    @Field(() => egg_groupsUpdateInput, {nullable:false})
    @Type(() => egg_groupsUpdateInput)
    update!: egg_groupsUpdateInput;
}
