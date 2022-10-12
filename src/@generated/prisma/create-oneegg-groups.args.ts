import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsCreateInput } from '../egg-groups/egg-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneeggGroupsArgs {

    @Field(() => egg_groupsCreateInput, {nullable:false})
    @Type(() => egg_groupsCreateInput)
    data!: egg_groupsCreateInput;
}
