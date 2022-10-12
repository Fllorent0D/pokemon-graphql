import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsWhereInput } from '../egg-groups/egg-groups-where.input';
import { Type } from 'class-transformer';
import { egg_groupsOrderByWithRelationInput } from '../egg-groups/egg-groups-order-by-with-relation.input';
import { egg_groupsWhereUniqueInput } from '../egg-groups/egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateeggGroupsArgs {

    @Field(() => egg_groupsWhereInput, {nullable:true})
    @Type(() => egg_groupsWhereInput)
    where?: egg_groupsWhereInput;

    @Field(() => [egg_groupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<egg_groupsOrderByWithRelationInput>;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:true})
    cursor?: egg_groupsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
