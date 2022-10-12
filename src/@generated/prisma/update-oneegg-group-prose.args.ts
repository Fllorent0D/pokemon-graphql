import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseUpdateInput } from '../egg-group-prose/egg-group-prose-update.input';
import { Type } from 'class-transformer';
import { egg_group_proseWhereUniqueInput } from '../egg-group-prose/egg-group-prose-where-unique.input';

@ArgsType()
export class UpdateOneeggGroupProseArgs {

    @Field(() => egg_group_proseUpdateInput, {nullable:false})
    @Type(() => egg_group_proseUpdateInput)
    data!: egg_group_proseUpdateInput;

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:false})
    @Type(() => egg_group_proseWhereUniqueInput)
    where!: egg_group_proseWhereUniqueInput;
}
