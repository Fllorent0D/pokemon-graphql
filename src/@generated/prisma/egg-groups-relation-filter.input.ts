import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsWhereInput } from '../egg-groups/egg-groups-where.input';

@InputType()
export class Egg_groupsRelationFilter {

    @Field(() => egg_groupsWhereInput, {nullable:true})
    is?: egg_groupsWhereInput;

    @Field(() => egg_groupsWhereInput, {nullable:true})
    isNot?: egg_groupsWhereInput;
}
