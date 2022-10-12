import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsWhereUniqueInput } from '../egg-groups/egg-groups-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueeggGroupsArgs {

    @Field(() => egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => egg_groupsWhereUniqueInput)
    where!: egg_groupsWhereUniqueInput;
}
