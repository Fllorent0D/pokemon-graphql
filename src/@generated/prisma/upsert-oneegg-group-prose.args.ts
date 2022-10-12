import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseWhereUniqueInput } from '../egg-group-prose/egg-group-prose-where-unique.input';
import { Type } from 'class-transformer';
import { egg_group_proseCreateInput } from '../egg-group-prose/egg-group-prose-create.input';
import { egg_group_proseUpdateInput } from '../egg-group-prose/egg-group-prose-update.input';

@ArgsType()
export class UpsertOneeggGroupProseArgs {

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:false})
    @Type(() => egg_group_proseWhereUniqueInput)
    where!: egg_group_proseWhereUniqueInput;

    @Field(() => egg_group_proseCreateInput, {nullable:false})
    @Type(() => egg_group_proseCreateInput)
    create!: egg_group_proseCreateInput;

    @Field(() => egg_group_proseUpdateInput, {nullable:false})
    @Type(() => egg_group_proseUpdateInput)
    update!: egg_group_proseUpdateInput;
}
