import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsUpdateManyMutationInput } from '../egg-groups/egg-groups-update-many-mutation.input';
import { Type } from 'class-transformer';
import { egg_groupsWhereInput } from '../egg-groups/egg-groups-where.input';

@ArgsType()
export class UpdateManyeggGroupsArgs {

    @Field(() => egg_groupsUpdateManyMutationInput, {nullable:false})
    @Type(() => egg_groupsUpdateManyMutationInput)
    data!: egg_groupsUpdateManyMutationInput;

    @Field(() => egg_groupsWhereInput, {nullable:true})
    @Type(() => egg_groupsWhereInput)
    where?: egg_groupsWhereInput;
}
