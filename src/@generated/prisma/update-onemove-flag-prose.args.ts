import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseUpdateInput } from '../move-flag-prose/move-flag-prose-update.input';
import { Type } from 'class-transformer';
import { move_flag_proseWhereUniqueInput } from '../move-flag-prose/move-flag-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveFlagProseArgs {

    @Field(() => move_flag_proseUpdateInput, {nullable:false})
    @Type(() => move_flag_proseUpdateInput)
    data!: move_flag_proseUpdateInput;

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_proseWhereUniqueInput)
    where!: move_flag_proseWhereUniqueInput;
}
