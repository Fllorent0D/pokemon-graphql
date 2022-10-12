import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseUpdateManyMutationInput } from '../egg-group-prose/egg-group-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { egg_group_proseWhereInput } from '../egg-group-prose/egg-group-prose-where.input';

@ArgsType()
export class UpdateManyeggGroupProseArgs {

    @Field(() => egg_group_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => egg_group_proseUpdateManyMutationInput)
    data!: egg_group_proseUpdateManyMutationInput;

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    @Type(() => egg_group_proseWhereInput)
    where?: egg_group_proseWhereInput;
}
