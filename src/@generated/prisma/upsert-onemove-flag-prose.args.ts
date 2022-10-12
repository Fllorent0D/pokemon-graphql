import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseWhereUniqueInput } from '../move-flag-prose/move-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_proseCreateInput } from '../move-flag-prose/move-flag-prose-create.input';
import { move_flag_proseUpdateInput } from '../move-flag-prose/move-flag-prose-update.input';

@ArgsType()
export class UpsertOnemoveFlagProseArgs {

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_proseWhereUniqueInput)
    where!: move_flag_proseWhereUniqueInput;

    @Field(() => move_flag_proseCreateInput, {nullable:false})
    @Type(() => move_flag_proseCreateInput)
    create!: move_flag_proseCreateInput;

    @Field(() => move_flag_proseUpdateInput, {nullable:false})
    @Type(() => move_flag_proseUpdateInput)
    update!: move_flag_proseUpdateInput;
}
