import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsUpdateInput } from '../egg-groups/egg-groups-update.input';
import { Type } from 'class-transformer';
import { egg_groupsWhereUniqueInput } from '../egg-groups/egg-groups-where-unique.input';

@ArgsType()
export class UpdateOneeggGroupsArgs {

    @Field(() => egg_groupsUpdateInput, {nullable:false})
    @Type(() => egg_groupsUpdateInput)
    data!: egg_groupsUpdateInput;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => egg_groupsWhereUniqueInput)
    where!: egg_groupsWhereUniqueInput;
}
