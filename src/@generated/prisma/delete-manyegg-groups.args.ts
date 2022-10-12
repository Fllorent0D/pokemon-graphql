import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsWhereInput } from '../egg-groups/egg-groups-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyeggGroupsArgs {

    @Field(() => egg_groupsWhereInput, {nullable:true})
    @Type(() => egg_groupsWhereInput)
    where?: egg_groupsWhereInput;
}
